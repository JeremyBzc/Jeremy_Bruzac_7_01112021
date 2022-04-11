import apiGrp from './axios'

export default {
  getUserProfile(user) {
    return apiGrp.get(`profiles/${userId}`, user)
  },
  editUserProfile(user) {
    return apiGrp.put(`profiles/${userId}`, user)
  },
  deleteUserProfile(user) {
    return apiGrp.delete(`profiles/${userId}`, user)
  },
}
