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
import examService from '../../services/examService';

const Exam = () => {
    const [data, setData] = useState(null);

    const {
        data: exams,
        loading,
        runAsync: getExams,
    } = useRequest(examService.getExams, {
        manual: true,
    });

    console.log(exams);

    useEffect(() => {
        try {
            getExams();
        } catch (err) {
            console.error(err);
        }
    }, []);

    return (
        <CCard className="mb-4">
            <CCardHeader>Exams</CCardHeader>
            <CCardBody>
                <CHeaderBrand style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0' }}>
                    <div></div>
                    <h3>Danh sách đề thi</h3>
                    <Link to="/exams/create">
                        <CButton color="primary">Thêm mới</CButton>
                    </Link>
                </CHeaderBrand>
                <CTable>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Exam Title</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Exam Description</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Exam Subject</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Exam Type</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Exam Class</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Exam Year</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Exam Time</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {!loading ? (
                            exams?.data?.data?.length > 0 ? (
                                exams.data.data.map((item, index) => (
                                    <CTableRow key={item.id}>
                                        <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                                        <CTableDataCell>{item.title}</CTableDataCell>
                                        <CTableDataCell>{item.description}</CTableDataCell>
                                        <CTableDataCell>{item.subject_type}</CTableDataCell>
                                        <CTableDataCell>{item.form_type}</CTableDataCell>
                                        <CTableDataCell>{item.class}</CTableDataCell>
                                        <CTableDataCell>{item.year}</CTableDataCell>
                                        <CTableDataCell>{item.time_done}</CTableDataCell>
                                        <CTableDataCell>
                                            <CRow style={{ width: 'max-content' }} xs={{ gutter: 1 }}>
                                                <CCol style={{ width: 'max-content' }}>
                                                    <Link to={`/exams/${item}`}>
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
                                <h3>Chưa có đề thi nào trong danh sách</h3>
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

export default Exam;
