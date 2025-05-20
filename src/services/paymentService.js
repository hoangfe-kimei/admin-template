import axiosInstance from '../axios/instance';

class PaymentService {
    getListPayments = () => {
        return axiosInstance.get('/admin/payment/list');
    };

    acceptPayment = (data) => {
        return axiosInstance.put('/admin/payment/update-status', data);
    };
}

const paymentService = new PaymentService();

export default paymentService;
