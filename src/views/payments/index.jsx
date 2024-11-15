import React, { useState } from 'react';
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

const Payment = () => {
    const [data, setData] = useState();
    const { addToast } = useToaster();

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
    const fakeData = [
        {
            id: 1,
            paymentId: 'PMT1234567890',
            paymentMethod: 'QR', // qr, stk
            plan: 'Basic', // Pro, Promax
            duration: 1,
            price: '$10.00',
            userId: 'user123',
            userName: 'John Doe',
            uniqueCode: 'ABC123',
        },
        {
            id: 2,
            paymentId: 'PMT9876543210',
            paymentMethod: 'STK',
            plan: 'Pro',
            duration: 3,
            price: '$20.00',
            userId: 'user456',
            userName: 'Jane Doe',
            uniqueCode: 'DEF456',
        },
        {
            id: 3,
            paymentId: 'PMT3456789012',
            paymentMethod: 'QR',
            plan: 'Promax',
            duration: 6,
            price: '$30.00',
            userId: 'user789',
            userName: 'Michael Doe',
            uniqueCode: 'GHI789',
        },
        {
            id: 4,
            paymentId: 'PMT1234567890',
            paymentMethod: 'QR',
            plan: 'Basic',
            duration: 1,
            price: '$10.00',
            userId: 'user123',
            userName: 'John Doe',
            uniqueCode: 'ABC123',
        },
        {
            id: 5,
            paymentId: 'PMT9876543210',
            paymentMethod: 'STK',
            plan: 'Pro',
            duration: 3,
            price: '$20.00',
            userId: 'user456',
            userName: 'Jane Doe',
            uniqueCode: 'DEF456',
        },
    ];

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
                {fakeData.map((item, index) => (
                    <CTableRow key={item.id}>
                        <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                        <CTableDataCell>{item.paymentId}</CTableDataCell>
                        <CTableDataCell>{item.paymentMethod}</CTableDataCell>
                        <CTableDataCell>{item.plan}</CTableDataCell>
                        <CTableDataCell>{item.duration}</CTableDataCell>
                        <CTableDataCell>{item.price}</CTableDataCell>
                        <CTableDataCell>
                            {item.userId} - {item.userName}
                        </CTableDataCell>
                        <CTableDataCell>{item.uniqueCode}</CTableDataCell>
                        <CTableDataCell>
                            <CRow xs={{ gutter: 1 }}>
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
                            </CRow>
                        </CTableDataCell>
                    </CTableRow>
                ))}
            </CTableBody>
            <CModal visible={!!data} onClose={() => setData(null)} aria-labelledby="LiveDemoExampleLabel">
                <CModalHeader>
                    <CModalTitle id="LiveDemoExampleLabel">{data?.userName}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>Woohoo, you are reading this text in a modal!</p>
                </CModalBody>
                <CModalFooter>
                    <CButton
                        color="secondary"
                        onClick={() => {
                            handleShowErrorToast();
                        }}
                    >
                        Close
                    </CButton>
                    <CButton color="primary" onClick={handleShowSuccessToast}>
                        Save changes
                    </CButton>
                </CModalFooter>
            </CModal>
        </CTable>
    );
};

export default Payment;
