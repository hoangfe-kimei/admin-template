import axiosInstance from '../axios/instance';

class ExamService {
    getExams = () => {
        return axiosInstance.get('/exam/list');
    };
}

const examService = new ExamService();

export default examService;
