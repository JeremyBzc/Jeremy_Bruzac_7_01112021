<template>
  <div class="row">
    <div class="col-12 col-lg-6 mx-auto mb-4">
      <div class="mb-4 mb-lg-0">
        <div v-if="post" class="card-body text-center">
          <h5 class="post-title">{{ post.title }}</h5>
          <p class="post-description">{{ post.content }}</p>
          <div class="post-comments">Ajouter des commentaires</div>
          <textarea v-model="comment"></textarea>
          <button @click="SubmitCom">Ajouter</button>
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
      post: null,
      comments: null,
      comment: '',
    }
  },

  async created() {
    const id = this.$route.params.id
    const resPost = await postService.getOnePost(id)
    this.post = resPost.data

    const resCom = await postService.getComments(id)
    this.comments = resCom.data
  },
  computed: {
    ...mapState({
      user: (state) => state.users.user,
    }),
  },
  methods: {
    async SubmitCom() {
      const payload = {
        userId: this.user.userId,
        PostId: this.$route.params.id,
        content: this.comment,
      }
      await postService.createComment(payload)
    },
  },
}
</script>

<style scoped></style>
