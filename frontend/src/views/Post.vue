<template>
  <div class="container">
    <div class="row">
      <div class="d-flex align-items-start mt-5 return-arrow">
        <button @click="ReturnForum" class="return-arrow">
          <font-awesome-icon :icon="['fa-solid', 'fa-circle-arrow-left']" />
        </button>
      </div>
      <div class="col-8 col-lg-6 mx-auto my-5">
        <div class="mb-4 mb-lg-0">
          <div v-if="post" class="card-post card-body">
            <div class="container-card p-3 d-flex flex-column align-items-end">
              <div class="post-header d-flex justify-content-between">
                <div class="post-user d-flex flex-column align-items-start">
                  <h5>{{ post.User.firstName + ' ' + post.User.lastName }}</h5>
                  <p class="text-muted">{{ post.createdAt | formatDate }}</p>
                </div>
                <div v-if="creator" class="d-flex flex-column align-items-end">
                  <button @click="ShowSettings" class="user-settings mb-2">
                    <font-awesome-icon :icon="['fa-solid', 'fa-ellipsis']" />
                  </button>
                  <div
                    v-if="displaySettings"
                    class="overlay-settings"
                    v-on:click="ShowSettings"
                  ></div>
                  <div
                    v-if="displaySettings"
                    class="d-flex flex-column align-items-start modale-settings"
                  >
                    <button @click="deletePost" class="button-settings">
                      <font-awesome-icon
                        :icon="['fa-solid', 'fa-trash']"
                        class="icon-settings"
                      />Supprimer
                    </button>
                    <button
                      @click="toggleModaleEditingPost"
                      class="button-settings"
                    >
                      <font-awesome-icon
                        :icon="['fa-solid', 'fa-pen-to-square']"
                        class="icon-settings mr-1"
                      />Modifier
                    </button>
                  </div>
                </div>
              </div>
              <modaleEditPost
                :displayEditingPost="displayEditingPost"
                :toggleModaleEditingPost="toggleModaleEditingPost"
                :postId="$route.params.id"
              />
              <div class="post-content rounded p-3">
                <h5>{{ post.title }}</h5>
                <p>{{ post.content }}</p>
                <div class="post-image bg-light">
                  <img v-if="post.attachment" :src="post.attachment" />
                </div>
                <div
                  v-if="post.User.bio"
                  class="border-top text-muted font-italic mt-2"
                >
                  {{ post.User.bio }}
                </div>
              </div>
            </div>
            <div
              class="post-infos d-flex justify-content-between align-items-end"
            >
              <div v-if="post.likes" class="text-muted p-1">
                {{ post.likes }}J'aimes
              </div>
              <div v-if="comments && comments.length" class="text-muted mt-1">
                <div @click="ShowComments" class="infos-comment p-1">
                  {{ comments.length + ' ' }}Commentaires
                </div>
              </div>
            </div>
            <div
              class="post-form d-flex justify-content-around pt-2 border-top"
            >
              <button v-if="AxeImproved" class="button-infos" @click="likePost">
                <font-awesome-icon
                  :icon="['fa-solid', 'fa-thumbs-up']"
                  class="infos-icon"
                />
              </button>
              <button class="button-infos" @click="ShowFormComment">
                <font-awesome-icon
                  :icon="['fa-solid', 'fa-comment']"
                  class="infos-icon"
                />
              </button>
            </div>
            <div v-if="display" class="footer-card">
              <div class="d-flex flex-column mt-3">
                <textarea
                  class="input-area"
                  placeholder="Ajouter un commentaire..."
                  v-model="comment"
                ></textarea>
                <div class="mt-2">
                  <button
                    class="btn btn-success"
                    @click="SubmitCom"
                    :disabled="!validatedFields"
                    type="submit"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="displayComments" class="bloc-comments">
            <div
              v-for="(comment, index) in comments"
              :key="comment.id"
              class="comments-area card-body"
            >
              <div :comment="comment">
                <div class="d-flex justify-content-between border-bottom">
                  <div class="d-flex flex-column align-items-start">
                    <h6>
                      {{ comment.User.firstName + ' ' + comment.User.lastName }}
                    </h6>
                    <p class="text-muted mb-0">
                      {{ comment.createdAt | formatDate }}
                    </p>
                  </div>
                  <div v-if="comment.userId == user.userId || user.isAdmin">
                    <button
                      @click.prevent="deleteComment(comment.id, index)"
                      class="button-infos"
                    >
                      <font-awesome-icon
                        :icon="['fa-solid', 'fa-trash']"
                        class="infos-icon"
                      />
                    </button>
                  </div>
                </div>
                <div class="mt-2">
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
import ModaleEditPost from '../components/ModaleEditPost.vue'
import postService from '../services/postService'
export default {
  name: 'Post',
  components: {
    modaleEditPost: ModaleEditPost,
  },
  data() {
    return {
      post: null,
      comments: null,
      comment: '',
      display: false,
      creator: true,
      displaySettings: false,
      displayEditingPost: false,
      displayComments: false,
      AxeImproved: false,
    }
  },

  async created() {
    const id = this.$route.params.id
    this.getOnePost(id)
    this.getComments(id)
  },
  computed: {
    ...mapState({
      user: (state) => state.users.user,
      computedPost: (state) => state.posts.post,
    }),
    validatedFields() {
      if (this.comment != '') {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    async SubmitCom() {
      const payload = {
        UserId: this.user.userId,
        PostId: this.$route.params.id,
        content: this.comment,
      }
      const id = this.$route.params.id
      try {
        await postService.createComment(payload)
        this.getComments(id)
        this.ShowFormComment()
        this.ShowComments()
        this.clearForm()
      } catch (e) {
        console.log(e)
      }
    },
    ShowComments() {
      this.displayComments = !this.displayComments
    },
    ShowFormComment() {
      this.display = !this.display
    },
    ShowSettings() {
      this.displaySettings = !this.displaySettings
    },
    toggleModaleEditingPost() {
      this.displayEditingPost = !this.displayEditingPost
    },
    deletePost() {
      this.$store
        .dispatch('deletePost', this.post.id)
        .then(() => {
          confirm('Êtes-vous certain de supprimer la publication ?')
          this.ReturnForum()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteComment(commentId, index) {
      postService
        .deleteComment(commentId)
        .then(() => {
          this.comments.splice(index, 1)
        })
        .catch((error) => console.log('Cannot delete comment ' + error))
    },
    likePost() {},
    ReturnForum() {
      this.$router.push('/forum')
    },
    clearForm() {
      this.comment = ''
    },
    async getComments(id) {
      const resCom = await postService.getComments(id)
      this.comments = resCom.data
    },
    async getOnePost(id) {
      const resPost = await postService.getOnePost(id)
      this.post = resPost.data
      try {
        if (this.post.UserId != this.user.userId && this.user.isAdmin != true) {
          this.creator = false
        }
      } catch (e) {
        console.log(e)
      }
    },
    // CRÉER UNE MÉTHODE POIR ALLER AU DERNIER COMM ( Axe amélioration après formation)
    // CRÉER UNE MÉTHODE POUR CLEAR LE CHAMP ( Axe amélioration après formation)
  },
}
</script>

<style scoped>
.return-arrow {
  font-size: 50px;
  border: none;
  background-color: transparent;
  color: #be123c;
}
.fa-circle-arrow-left:hover {
  border-radius: 25px;
  background-color: rgb(190, 18, 60);
  color: white;
}
.post-form a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
.post-form a:hover {
  background-color: #f0f0f0;
}
.user-settings {
  border: none;
  background-color: transparent;
}
.user-settings:hover,
.user-settings:focus {
  background-color: rgba(190, 18, 60, 0.5);
  color: white;
  border-radius: 100%;
}
.post-header,
.post-content {
  width: 100%;
}
.modale-settings {
  border: 2px solid #f0f0f0;
  background-color: white;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 10px 5px 15px rgb(128 128 128 / 30%);
  position: absolute;
  top: 70px;
}
.overlay-settings {
  background: transparent;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.card-post {
  position: relative;
}
.icon-settings {
  color: #be123c;
  margin-right: 5px;
}
.infos-comment {
  cursor: pointer;
}
.infos-comment:hover {
  color: black;
}
.infos-icon {
  font-size: 20px;
  color: #6c767d;
}
.infos-icon:hover {
  color: rgba(190, 18, 60, 0.5);
}
.button-infos {
  border: none;
  background-color: transparent;
}
.button-settings {
  border: none;
  background-color: transparent;
}
.button-settings:hover {
  background-color: rgba(190, 18, 60, 0.5);
  color: white;
  border-radius: 25px;
  font-weight: bold;
}
.bloc-comments {
  border-left: 5px solid #be123c;
  border-radius: 25px;
}
.input-area {
  border-radius: 20px;
  height: 35px;
  padding-left: 10px;
}
</style>
