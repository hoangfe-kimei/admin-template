import React, { useState } from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormSelect,
    CHeaderBrand,
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

const Questions = () => {
    const [data, setData] = useState(null);

    return (
        <CCard className="mb-4">
            <CCardHeader>Questions</CCardHeader>
            <CCardBody>
                <CFormSelect
                    aria-label="Default select example"
                    options={[
                        'Chọn đề thi',
                        { label: 'One', value: '1' },
                        { label: 'Two', value: '2' },
                        { label: 'Three', value: '3', disabled: true },
                    ]}
                />
                <CHeaderBrand style={{ textAlign: 'center', display: 'block', padding: '16px 0' }}>
                    Danh sách câu hỏi
                </CHeaderBrand>
                <CTable>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Question ID</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Question Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Question Content</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Question answer</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {[1, 2, 3, 4, 5].map((item, index) => (
                            <CTableRow key={item}>
                                <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                                <CTableDataCell>{index + 99}</CTableDataCell>
                                <CTableDataCell>question name</CTableDataCell>
                                <CTableDataCell>question content</CTableDataCell>
                                <CTableDataCell>question answer</CTableDataCell>
                                <CTableDataCell>
                                    <CRow style={{ width: 'max-content' }} xs={{ gutter: 1 }}>
                                        <CCol style={{ width: 'max-content' }}>
                                            <CButton style={{ width: 'max-content' }} color="primary">
                                                Chỉnh sửa
                                            </CButton>
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
                        ))}
                    </CTableBody>
                    <CModal visible={!!data} onClose={() => setData(null)} aria-labelledby="LiveDemoExampleLabel">
                        <CModalHeader>
                            <CModalTitle id="LiveDemoExampleLabel">Xóa câu hỏi</CModalTitle>
                        </CModalHeader>
                        <CModalBody>
                            <p>Bạn có chắc chắn muốn xóa câu hỏi này không?</p>
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

export default Questions;
