import axiosInstance from '../axios/instance';

class SchoolService {
    createSchool = (data) => {
        return axiosInstance.post('/school/create', data);
    };

    getSchools = () => {
        return axiosInstance.get('/school/list');
    };
}

const schoolService = new SchoolService();

export default schoolService;
