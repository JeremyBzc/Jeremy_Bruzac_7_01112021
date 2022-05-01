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
  },
  actions: {
    getAllPost: ({ commit }) => {
      try {
        const post = postService.getAllPost()
        commit('postInfos', post.data)
      } catch (error) {}
    },
    createPost: async ({ commit }, postInfos) => {
      console.log(postInfos)
      try {
        const post = await postService.createPost(postInfos)
        console.log('created')
        commit('setStatus', 'Post created')
        commit('postInfos', post.data)
      } catch (error) {}
    },
  },
}
