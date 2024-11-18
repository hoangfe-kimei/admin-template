import axiosInstance from '../axios/instance';

class PaymentService {
    getListPayments = () => {
        return axiosInstance.get('/payment/list');
    };

    acceptPayment = (data) => {
        return axiosInstance.put('/payment/update-status', data);
    };
}

const paymentService = new PaymentService();

export default paymentService;
