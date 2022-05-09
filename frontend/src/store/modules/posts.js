import postService from '@/services/postService'

export default {
  state: {
    status: '',
    currentPost: {},
    posts: [],
  },

  mutations: {
    setStatus(state, status) {
      state.status = status
    },
    setCurrentPost(state, post) {
      state.currentPost = post
    },
    postInfos(state, postInfos) {
      state.posts = postInfos
    },
    // logPost(state, post) {
    //   localStorage.setItem('postStorage', JSON.stringify(post))
    //   state.posts = post
    // },
  },
  actions: {
    getOnePost: ({ commit }) => {
      try {
        const post = postService.getOnePost()
        commit('setCurrentPost', post.data)
      } catch (error) {}
    },
    getAllPost: ({ commit }) => {
      try {
        const post = postService.getAllPost()
        commit('postInfos', post.data)
      } catch (error) {}
    },
    createPost: async ({ commit }, postInfos) => {
      try {
        const post = await postService.createPost(postInfos)
        commit('setStatus', 'Post created')
        commit('postInfos', post.data)
      } catch (error) {}
    },
  },
}
