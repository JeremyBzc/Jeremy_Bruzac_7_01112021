<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6 mx-auto mb-4">
        <div class="mb-4 mb-lg-0">
          <div v-if="post" class="card-body">
            <div
              class="container-card p-3 d-flex flex-column align-items-start"
            >
              <div class="post-header d-flex justify-content-between mb-3">
                <div class="post-user d-flex flex-column align-items-start">
                  <h5>{{ post.User.firstName + ' ' + post.User.lastName }}</h5>
                  <p>{{ post.createdAt }}</p>
                </div>
                <div class="d-flex flex-column align-items-end">
                  <button @click="ShowSettings" class="user-settings">
                    <font-awesome-icon :icon="['fa-solid', 'fa-ellipsis']" />
                  </button>
                  <div v-if="settings" class="border card-body">
                    <button class="user-settings">
                      <font-awesome-icon
                        :icon="['fa-solid', 'fa-trash']"
                        class="icon-trash"
                      />Supprimer
                    </button>
                    <button class="user-settings">
                      <font-awesome-icon
                        :icon="['fa-solid', 'fa-pen-to-square']"
                        class="icon-trash mr-1"
                      />Modifier
                    </button>
                  </div>
                </div>
              </div>
              <div class="post-content bg-light rounded p-3">
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
                Écrivez votre commentaire !
              </a>
            </div>
            <div v-if="display" class="footer-card border-top border-success">
              <div class="d-flex flex-column mt-3">
                <textarea v-model="comment"></textarea>
                <button class="btn btn-success" @click="SubmitCom">
                  Ajouter
                </button>
              </div>
            </div>
            <div
              v-for="(comment, index) in comments"
              :key="index"
              class="comments-area card-body"
            >
              <div :comment="comment">
                <div></div>
                <div class="bg-light rounded p-3">
                  {{ comment.content }}
                </div>
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
      settings: false,
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
        UserId: this.user.userId,
        PostId: this.$route.params.id,
        content: this.comment,
      }
      await postService.createComment(payload)
    },
    ShowFormComment() {
      this.display = true
    },
    ShowSettings() {
      this.settings = true
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
.user-settings {
  border: none;
  background-color: transparent;
}
.user-settings:focus {
  background-color: #c0c0c0;
  width: 30px;
  height: 30px;

  border-radius: 100%;
}
.post-header,
.post-content {
  width: 100%;
}
</style>
