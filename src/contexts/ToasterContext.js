import React, { createContext, useContext, useRef, useState } from 'react';
import { CToaster, CToast, CToastHeader, CToastBody } from '@coreui/react';

const ToasterContext = createContext(undefined);

export const ToasterProvider = ({ children }) => {
    const [toast, setToast] = useState(null);
    const toasterRef = useRef(null);

    const addToast = (options) => {
        const newToast = (
            <CToast key={Date.now()} color={options.color}>
                <CToastHeader closeButton>
                    <svg
                        className="rounded me-2"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        role="img"
                    >
                        <rect width="100%" height="100%" fill="#007aff"></rect>
                    </svg>
                    <div className="fw-bold me-auto">{options.header || 'Notification'}</div>
                    <small>{options.time || 'Just now'}</small>
                </CToastHeader>
                <CToastBody>{options.body}</CToastBody>
            </CToast>
        );

        setToast(newToast);
    };

    return (
        <ToasterContext.Provider value={{ addToast }}>
            {children}
            <CToaster className="p-3" placement="top-end" push={toast} ref={toasterRef} />
        </ToasterContext.Provider>
    );
};

export const useToaster = () => {
    const context = useContext(ToasterContext);
    if (!context) {
        throw new Error('useToaster must be used within a ToasterProvider');
    }
    return context;
};
