<template>
  <div class="row">
    <div class="col-12 col-lg-6 mx-auto mb-4">
      <div class="card mb-4 mb-lg-0 border-dark shadow">
        <div class="card-body text-center">
          <h5 class="post-title">{{ posts.title }}</h5>
          <p class="post-description">{{ posts.description }}</p>
          <p class="post-author">{{ posts.author }}</p>
          <p class="post-date">{{ posts.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Post',

  created() {
    this.$store.dispatch('setCurrentPost', this.computedPost.id)
    // let postId = this.$route.params.id
    // console.log(postId)
  },
  computed: {
    post: async () => {
      return await this.$store.getters.getCurrentPost
    },
  },
  ...mapState({
    computedPost: (state) => state.posts.posts,
  }),
}
</script>

<style lang="scss" scoped></style>
