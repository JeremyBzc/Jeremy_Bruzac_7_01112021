<template>
  <div class="row">
    <div class="col-12 col-lg-6 mx-auto mb-4">
      <div class="card mb-4 mb-lg-0">
        <div class="card-body text-center">
          <p>Lol</p>
          <h5 class="post-title">{{ post.title }}</h5>
          <p class="post-description">{{ post.content }}</p>
          <div class="post-comments">Ajouter des commentaires</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import postService from '../services/postService'
export default {
  name: 'Post',
  data() {
    return {
      post: {
        postId: this.$store.state.posts.post.id,
        title: '',
        content: '',
        attachement: '',
      },
    }
  },

  async mounted() {
    const resPost = await postService.getOnePost()
    this.post = resPost.data
  },
  computed: {
    ...mapState({
      post: (state) => state.posts.currentPost,
      user: (state) => state.users.user,
    }),
  },
}
</script>

<style scoped></style>
