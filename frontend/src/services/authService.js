import apiGrp from './axios';

export default {
    registerUser(user) {
        return apiGrp.post('auth/signup', user)
    }
}