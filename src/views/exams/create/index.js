import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CFormLabel } from '@coreui/react';
import React, { useState } from 'react';
import schoolService from '../../../services/schoolService';
import { useToaster } from '../../../contexts/ToasterContext';

const CreateExam = () => {
    const [validated, setValidated] = useState(false);
    const { addToast } = useToaster();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        subject_type: '',
        form_type: '',
        url: '',
        time_done: '',
        class: '',
        year: '',
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
                title: formData.title,
                description: formData.description,
                subject_type: formData.subject_type,
                form_type: formData.form_type,
                url: formData.url,
                time_done: formData.time_done,
                class: formData.class,
                year: formData.year,
            };

            console.log(data);
        }
    };

    return (
        <CCard className="mb-4">
            <CCardHeader>CREATE Exam</CCardHeader>
            <CCardBody style={{ display: 'flex' }}>
                <CForm className="col g-3 needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip01">Exam Title</CFormLabel>
                        <CFormInput
                            value={formData.title}
                            onChange={handleChange}
                            name="title"
                            type="text"
                            id="validationTooltip01"
                            defaultValue=""
                            required
                        />
                    </CCol>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip01">Exam Description</CFormLabel>
                        <CFormInput
                            value={formData.description}
                            onChange={handleChange}
                            name="description"
                            type="text"
                            id="validationTooltip01"
                            defaultValue=""
                            required
                        />
                    </CCol>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip01">Exam Subject</CFormLabel>
                        <CFormInput
                            value={formData.subject_type}
                            onChange={handleChange}
                            name="subject_type"
                            type="text"
                            id="validationTooltip01"
                            defaultValue=""
                            required
                        />
                    </CCol>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip01">Exam Type</CFormLabel>
                        <CFormInput
                            value={formData.form_type}
                            onChange={handleChange}
                            name="form_type"
                            type="text"
                            id="validationTooltip01"
                            defaultValue=""
                            required
                        />
                    </CCol>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip01">Exam URL</CFormLabel>
                        <CFormInput
                            value={formData.url}
                            onChange={handleChange}
                            name="url"
                            type="text"
                            id="validationTooltip01"
                            defaultValue=""
                            required
                        />
                    </CCol>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip01">Exam Time</CFormLabel>
                        <CFormInput
                            value={formData.time_done}
                            onChange={handleChange}
                            name="time_done"
                            type="text"
                            id="validationTooltip01"
                            defaultValue=""
                            required
                        />
                    </CCol>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip01">Exam Year</CFormLabel>
                        <CFormInput
                            value={formData.year}
                            onChange={handleChange}
                            name="year"
                            type="text"
                            id="validationTooltip01"
                            defaultValue=""
                            required
                        />
                    </CCol>
                    <CCol md={8} className="position-relative">
                        <CFormLabel htmlFor="validationTooltip01">Exam Class</CFormLabel>
                        <CFormInput
                            value={formData.class}
                            onChange={handleChange}
                            name="class"
                            type="text"
                            id="validationTooltip01"
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

export default CreateExam;
