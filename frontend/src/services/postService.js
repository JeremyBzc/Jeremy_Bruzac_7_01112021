import apiGrp from './axios'

export default {
  getOnePost(id) {
    return apiGrp.get(`posts/${id}`)
  },
  getAllPost() {
    return apiGrp.get('posts/')
  },
  createPost(postInfos) {
    return apiGrp.post('posts/', postInfos)
  },
  editPost(payload) {
    return apiGrp.put(`posts/${payload.postId}`, payload.post)
  },
  deletePost(postId) {
    return apiGrp.delete(`posts/${postId}`)
  },
  getComments(postId) {
    return apiGrp.get(`posts/${postId}/comments`)
  },
  createComment(params) {
    return apiGrp.post(`posts/${params.PostId}/comment`, params)
  },
}
