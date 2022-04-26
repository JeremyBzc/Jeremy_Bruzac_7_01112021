export default {
  state: {
    currentPost: {},
    posts: [
      {
        id: 1,
        title: 'Premier post',
        author: 'Jérém',
        date: new Date(),
        description: 'Je suis une description vraiment aboutie',
      },
      {
        id: 2,
        title: 'Le réseau LAN',
        author: 'Kevin',
        date: new Date(),
        description: "J'explique le réseau informatique",
      },
      {
        id: 3,
        title: 'Information sur vos pauses Dej',
        author: 'Admin',
        date: new Date(),
        description: 'Je tiens à vous remercier pour la propreté des locaux',
      },
      {
        id: 4,
        title: 'Je suis un test',
        author: 'Admin',
        date: new Date(),
        description: 'Je tiens à vous tester',
      },
      {
        id: 5,
        title: 'Je suis un 2nd test',
        author: 'Admin',
        date: new Date(),
        description: 'Je tiens à vous tester de nouveau',
      },
      {
        id: 6,
        title: 'Je suis un test demi finaliste',
        author: 'Admin',
        date: new Date(),
        description: 'Je tiens à vous dire aurevoir',
      },
    ],
  },
  getters: {
    getPosts(state) {
      return state.posts
    },
    getCurrentPost(state) {
      return state.currentPost
    },
  },
  mutations: {
    setCurrentPost(state, post) {
      state.currentPost = post
    },
  },
  actions: {
    setCurrentPost({ commit, state }, postId) {
      let postFound = {}
      state.posts.forEach((post) => {
        if (postId == post.id) {
          postFound = post
        }
      })
      commit('setCurrentPost', postFound)
    },
  },
}
