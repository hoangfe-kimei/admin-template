import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CHeaderBrand,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CRow,
    CSpinner,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react';
import { useRequest } from 'ahooks';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import schoolService from '../../services/schoolService';

const University = () => {
    const [data, setData] = useState(null);

    const {
        data: schools,
        loading,
        runAsync: getSchools,
    } = useRequest(schoolService.getSchools, {
        manual: true,
    });

    useEffect(() => {
        try {
            getSchools();
        } catch (err) {
            console.error(err);
        }
    }, []);

    return (
        <CCard className="mb-4">
            <CCardHeader>University</CCardHeader>
            <CCardBody>
                <CHeaderBrand style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0' }}>
                    <div></div>
                    <h3>Danh sách các trường</h3>
                    <Link to="/university/create">
                        <CButton color="primary">Thêm mới</CButton>
                    </Link>
                </CHeaderBrand>
                <CTable>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                            <CTableHeaderCell scope="col">University ID</CTableHeaderCell>
                            <CTableHeaderCell scope="col">University Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">University Code</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {!loading ? (
                            schools?.data?.data?.length > 0 ? (
                                schools.data.data.map((item, index) => (
                                    <CTableRow key={item.id}>
                                        <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                                        <CTableDataCell>{item.id}</CTableDataCell>
                                        <CTableDataCell>{item.name}</CTableDataCell>
                                        <CTableDataCell>{item.code}</CTableDataCell>
                                        <CTableDataCell>
                                            <CRow style={{ width: 'max-content' }} xs={{ gutter: 1 }}>
                                                <CCol style={{ width: 'max-content' }}>
                                                    <Link to={`/university/${item}`}>
                                                        <CButton style={{ width: 'max-content' }} color="primary">
                                                            Chỉnh sửa
                                                        </CButton>
                                                    </Link>
                                                </CCol>
                                                <CCol>
                                                    <CButton
                                                        onClick={() => setData(item)}
                                                        color="danger"
                                                        style={{ color: '#FFF' }}
                                                    >
                                                        Xóa
                                                    </CButton>
                                                </CCol>
                                            </CRow>
                                        </CTableDataCell>
                                    </CTableRow>
                                ))
                            ) : (
                                <h3>Chưa có trường nào trong danh sách</h3>
                            )
                        ) : (
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '180px',
                                }}
                            >
                                <CSpinner color="primary" />
                            </div>
                        )}
                    </CTableBody>
                    <CModal visible={!!data} onClose={() => setData(null)} aria-labelledby="LiveDemoExampleLabel">
                        <CModalHeader>
                            <CModalTitle id="LiveDemoExampleLabel">Xóa trường</CModalTitle>
                        </CModalHeader>
                        <CModalBody>
                            <p>Bạn có chắc chắn muốn xóa trường này không?</p>
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
                            <CButton color="primary">Xác nhận</CButton>
                        </CModalFooter>
                    </CModal>
                </CTable>
            </CCardBody>
        </CCard>
    );
};

export default University;
