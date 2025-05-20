import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CFormLabel } from '@coreui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditExam = () => {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <CCard className="mb-4">
            <CCardHeader>EDIT Exam</CCardHeader>
            <CCardBody style={{ display: 'flex' }}>
                <CForm className="col g-3 needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip01">Exam Title</CFormLabel>
                        <CFormInput name="title" type="text" id="validationTooltip01" defaultValue="" required />
                    </CCol>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip01">Exam Description</CFormLabel>
                        <CFormInput name="description" type="text" id="validationTooltip01" defaultValue="" required />
                    </CCol>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip01">Exam Subject</CFormLabel>
                        <CFormInput name="subject_type" type="text" id="validationTooltip01" defaultValue="" required />
                    </CCol>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip01">Exam Type</CFormLabel>
                        <CFormInput name="form_type" type="text" id="validationTooltip01" defaultValue="" required />
                    </CCol>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip01">Exam URL</CFormLabel>
                        <CFormInput name="url" type="text" id="validationTooltip01" defaultValue="" required />
                    </CCol>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip01">Exam Time</CFormLabel>
                        <CFormInput name="time_done" type="text" id="validationTooltip01" defaultValue="" required />
                    </CCol>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip01">Exam Year</CFormLabel>
                        <CFormInput name="year" type="text" id="validationTooltip01" defaultValue="" required />
                    </CCol>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip01">Exam Class</CFormLabel>
                        <CFormInput name="class" type="text" id="validationTooltip01" defaultValue="" required />
                    </CCol>
                    <CCol xs={8} style={{ textAlign: 'center', paddingTop: '32px' }} className="position-relative">
                        <CButton color="primary" type="submit">
                            Submit form
                        </CButton>
                    </CCol>
                </CForm>
            </CCardBody>
        </CCard>
    );
};

export default EditExam;
