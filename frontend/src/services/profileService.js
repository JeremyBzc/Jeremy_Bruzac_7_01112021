import apiGrp from './axios'

export default {
  getUserProfile(userId) {
    return apiGrp.get(`profiles/${userId}`)
  },
  editUserProfile(userId, user) {
    return apiGrp.put(`profiles/${userId}`, user)
  },
  deleteUserProfile(user) {
    return apiGrp.delete(`profiles/${userId}`, user)
  },
}
