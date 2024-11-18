import React, { useEffect, useState } from 'react';
import {
    CButton,
    CCol,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react';
import { useToaster } from '../../contexts/ToasterContext';
import { useRequest } from 'ahooks';
import paymentService from '../../services/paymentService';

const Payment = () => {
    const [data, setData] = useState();
    const [payments, setPayments] = useState([]);
    const { addToast } = useToaster();

    const { loading, runAsync: handleGetListPayments } = useRequest(paymentService.getListPayments, {
        manual: true,
        onSuccess: (res) => {
            if (res.data.message === 'success') {
                setPayments(res.data.data);
            }
        },
    });

    const { loading: loadingAccept, runAsync: handleAcceptPayment } = useRequest(paymentService.acceptPayment, {
        manual: true,
        onSuccess: (res) => {
            if (res.data.message === 'success') {
                handleShowSuccessToast();
                setData(null);
                handleGetListPayments();
            }
        },
    });

    useEffect(() => {
        handleGetListPayments();
    }, []);

    const handleAccept = async () => {
        if (data) {
            try {
                await handleAcceptPayment({
                    id: data.id,
                });
            } catch (err) {
                console.error(err);
                handleShowErrorToast();
            }
        }
    };

    const handleShowSuccessToast = () => {
        addToast({
            header: 'Success',
            body: 'Your action was successful!',
            time: 'Just now',
        });
    };

    const handleShowErrorToast = () => {
        addToast({
            header: 'Error',
            body: 'Something went wrong!',
            time: '1 min ago',
        });
    };

    return (
        <CTable>
            <CTableHead>
                <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Payment ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Payment Method</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nam Plan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Duration</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                    <CTableHeaderCell scope="col">User Id - Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Unique Code</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                {payments.map((item, index) => (
                    <CTableRow key={item.id}>
                        <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                        <CTableDataCell>{item.id}</CTableDataCell>
                        <CTableDataCell>{item.payment_method}</CTableDataCell>
                        <CTableDataCell>{item.name_plan}</CTableDataCell>
                        <CTableDataCell>{item.duration}</CTableDataCell>
                        <CTableDataCell>{item.price}</CTableDataCell>
                        <CTableDataCell>
                            {item.user.id} - {item.user.name}
                        </CTableDataCell>
                        <CTableDataCell>{item.unique_code}</CTableDataCell>
                        <CTableDataCell>
                            <CRow xs={{ gutter: 1 }}>
                                {item.status === 'done' ? (
                                    <CCol>
                                        <CButton disabled color="success" style={{ color: '#FFF' }}>
                                            Đã hoàn thành
                                        </CButton>
                                    </CCol>
                                ) : (
                                    <>
                                        <CCol>
                                            <CButton onClick={() => setData(item)} color="primary">
                                                Xác nhận
                                            </CButton>
                                        </CCol>
                                        <CCol>
                                            <CButton color="danger" style={{ color: '#FFF' }}>
                                                Hủy bỏ
                                            </CButton>
                                        </CCol>
                                    </>
                                )}
                            </CRow>
                        </CTableDataCell>
                    </CTableRow>
                ))}
            </CTableBody>
            <CModal visible={!!data} onClose={() => setData(null)} aria-labelledby="LiveDemoExampleLabel">
                <CModalHeader>
                    <CModalTitle id="LiveDemoExampleLabel">Xác nhận đã thanh toán</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>Bạn có chắc chắn rằng đã nhận được tiền hóa đơn này không?</p>
                </CModalBody>
                <CModalFooter>
                    <CButton
                        color="secondary"
                        onClick={() => {
                            setData(null);
                        }}
                    >
                        Đóng
                    </CButton>
                    <CButton color="primary" onClick={handleAccept}>
                        Xác nhận
                    </CButton>
                </CModalFooter>
            </CModal>
        </CTable>
    );
};

export default Payment;
