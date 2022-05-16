<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6 mx-auto mb-4">
        <div class="mb-4 mb-lg-0">
          <div v-if="post" class="card-body">
            <div
              class="container-card p-3 d-flex flex-column align-items-start"
            >
              <div class="post-header d-flex justify-content-between">
                <div class="post-user d-flex flex-column align-items-start">
                  <h5>{{ post.User.firstName + ' ' + post.User.lastName }}</h5>
                  <p>{{ post.createdAt }}</p>
                </div>
                <div v-if="!userPost">
                  <font-awesome-icon
                    :icon="['fa-solid', 'fa-trash']"
                    class="icon-trash"
                  />
                </div>
              </div>
              <div class="post-content bg-light">
                <h5>{{ post.title }}</h5>
                <p>{{ post.content }}</p>
              </div>
            </div>
            <div class="post-form d-flex">
              <a href="#" @click="ShowFormComment">
                <font-awesome-icon
                  :icon="['fa-solid', 'fa-message']"
                  class="icon-message"
                />
                0 commentaires</a
              >
            </div>
            <div v-if="display" class="footer-card border-top border-success">
              <div class="d-flex flex-column mt-3">
                <textarea v-model="comment"></textarea>
                <button class="btn btn-success" @click="SubmitCom">
                  Ajouter
                </button>
              </div>
            </div>
          </div>
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
      display: false,
      count: '',
      userPost: '',
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
    ShowFormComment() {
      this.display = true
    },
  },
}
</script>

<style scoped>
.post-form a {
  text-decoration: none;
  color: black;
}
.icon-message {
  color: #c0c0c0;
}
.post-header {
  width: 100%;
}
</style>
