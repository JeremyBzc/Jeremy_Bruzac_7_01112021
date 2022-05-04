import apiGrp from './axios'

export default {
  getUserProfile(userId) {
    return apiGrp.get(`profiles/${userId}`)
  },
  editUserProfile(userId, userInfos) {
    return apiGrp.put(`profiles/${userId}`, userInfos)
  },
  deleteUserProfile(userId) {
    return apiGrp.delete(`profiles/${userId}`)
  },
}
