import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CFormLabel } from '@coreui/react';
import React, { useState } from 'react';
import schoolService from '../../../services/schoolService';
import { useToaster } from '../../../contexts/ToasterContext';

const CreateUniversity = () => {
    const [validated, setValidated] = useState(false);
    const { addToast } = useToaster();
    const [formData, setFormData] = useState({
        name: '',
        code: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleShowSuccessToast = () => {
        addToast({
            header: 'Success',
            body: 'Your action was successful!',
            time: 'Just now',
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setValidated(true);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            setValidated(false);
            const data = {
                name: formData.name,
                code: formData.code,
            };

            const res = await schoolService.createSchool(data);

            if (res.data.message === 'success') {
                handleShowSuccessToast();
                setFormData({
                    name: '',
                    code: '',
                });
            }
        }
    };

    return (
        <CCard className="mb-4">
            <CCardHeader>CREATE University</CCardHeader>
            <CCardBody style={{ display: 'flex' }}>
                <CForm className="col g-3 needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip01">University Name</CFormLabel>
                        <CFormInput
                            value={formData.name}
                            onChange={handleChange}
                            name="name"
                            type="text"
                            id="validationTooltip01"
                            defaultValue=""
                            required
                        />
                    </CCol>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip02">University Code</CFormLabel>
                        <CFormInput
                            value={formData.code}
                            onChange={handleChange}
                            name="code"
                            type="text"
                            id="validationTooltip02"
                            defaultValue=""
                            required
                        />
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

export default CreateUniversity;
