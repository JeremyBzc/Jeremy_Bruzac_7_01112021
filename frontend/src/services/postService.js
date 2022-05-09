import apiGrp from './axios'

export default {
  getOnePost(id) {
    return apiGrp.get(`posts/${id}`)
  },
  getAllPost() {
    return apiGrp.get('posts/')
  },
  createPost(postInfos) {
    console.log(postInfos)
    return apiGrp.post('posts/', postInfos)
  },
  //   editPost(postId) {
  //       return apiGrp.put(`posts/${postId}`)
  //   }
  deletePost(postId) {
    return apiGrp.delete(`posts/${postId}`)
  },
}
