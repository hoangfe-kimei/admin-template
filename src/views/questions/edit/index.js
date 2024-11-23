import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormFeedback,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditQuestion = () => {
    const params = useParams();
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    console.log('params: ', params); // Output: { id: "123" }

    return (
        <CCard className="mb-4">
            <CCardHeader>EDIT Question</CCardHeader>
            <CCardBody style={{ display: 'flex' }}>
                <CForm className="col g-3 needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip01">Question Name</CFormLabel>
                        <CFormInput type="text" id="validationTooltip01" defaultValue="" required />
                    </CCol>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip02">Question Content</CFormLabel>
                        <CFormInput type="text" id="validationTooltip02" defaultValue="" required />
                    </CCol>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltipUsername">Question Answer</CFormLabel>
                        <CInputGroup className="has-validation">
                            <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
                            <CFormInput
                                type="text"
                                id="validationTooltipUsername"
                                defaultValue=""
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                        </CInputGroup>
                    </CCol>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip04">City</CFormLabel>
                        <CFormSelect id="validationTooltip04" required>
                            <option disabled defaultValue="">
                                Choose...
                            </option>
                            <option>...</option>
                        </CFormSelect>
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

export default EditQuestion;
