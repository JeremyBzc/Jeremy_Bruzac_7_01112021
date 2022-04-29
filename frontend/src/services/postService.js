import apiGrp from './axios'

export default {
  getOnePost(postId) {
    return apiGrp.get(`posts/${postId}`)
  },
  getAllPost() {
    return apiGrp.get(`posts/`)
  },
  createPost() {
    return apiGrp.post(`posts/`)
  },
  //   editPost(postId) {
  //       return apiGrp.put(`posts/${postId}`)
  //   }
  deletePost(postId) {
    return apiGrp.delete(`posts/${postId}`)
  },
}
