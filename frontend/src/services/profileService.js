import apiGrp from './axios'

export default {
  getUserProfile(userId) {
    return apiGrp.get(`profiles/${userId}`)
  },
  editUserProfile(userInfos) {
    return apiGrp.put(`profiles/${userInfos.userId}`, userInfos)
  },
  deleteUserProfile(userId) {
    return apiGrp.delete(`profiles/${userId}`)
  },
}
