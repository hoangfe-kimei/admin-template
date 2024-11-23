import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CFormLabel } from '@coreui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditUniversity = () => {
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
            <CCardHeader>EDIT University</CCardHeader>
            <CCardBody style={{ display: 'flex' }}>
                <CForm className="col g-3 needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip01">University Name</CFormLabel>
                        <CFormInput type="text" id="validationTooltip01" defaultValue="" required />
                    </CCol>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip02">University Code</CFormLabel>
                        <CFormInput type="text" id="validationTooltip02" defaultValue="" required />
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

export default EditUniversity;
