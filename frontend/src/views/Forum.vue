<template>
  <div class="forum">
    <div class="container mb-5">
      <div class="col-lg-12 bg-success my-5 rounded">
        <h1 class="text-light">Bienvenue sur le forum</h1>
      </div>
      <div class="col-12 justify-content-between bg-light p-5">
        <div
          class="card-post rounded mb-5"
          v-for="(post, index) in posts"
          :key="index"
        >
          <PostCard :post="post" />
        </div>
      </div>
      <div class="my-5">
        <button
          v-if="mode == 'empty'"
          @click="switchToPost()"
          class="btn btn-success"
        >
          Écrire une publication
        </button>
        <button v-else @click="switchToEmpty()" class="btn btn-danger">
          Annuler la publication
        </button>
      </div>
      <div v-if="mode == 'empty'" class="container-empty"></div>
      <div v-else class="container-post">
        <div class="container d-flex justify-content-center">
          <div class="col-9 bg-light shadow p-3 mb-5 bg-white rounded">
            <h1 class="h4 text-center mb-4">
              Votre publication {{ user.firstName + ' ' + user.lastName }}
            </h1>
            <div class="form-row">
              <input
                v-model="post.title"
                placeholder="Titre"
                type="text"
                class="form-control"
              />
            </div>
            <br />
            <div class="form-row">
              <textarea
                v-model="post.content"
                placeholder="Contenu"
                type="textarea"
                class="form-control"
              />
            </div>
            <div class="text-center mt-4">
              <button
                @click.prevent="createPost()"
                class="btn btn-success"
                type="submit"
              >
                Envoyer
              </button>
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
import PostCard from '../components/PostCard.vue'

export default {
  components: {
    PostCard,
  },
  data() {
    return {
      mode: 'empty',
      post: {
        userId: this.$store.state.users.user.userId,
        title: '',
        content: '',
        attachement: '',
      },
      posts: null,
    }
  },
  methods: {
    switchToPost() {
      this.mode = 'post'
    },
    switchToEmpty() {
      this.mode = 'empty'
    },
    createPost() {
      this.$store
        .dispatch('createPost', this.post)
        .then(() => {
          console.log('success')
          //window.location.reload()
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  async mounted() {
    const response = await postService.getAllPost()
    this.posts = response.data
  },
  computed: {
    ...mapState({
      // computedPost: (state) => state.posts.posts,
      user: (state) => state.users.user,
      post: (state) => state.posts.post,
    }),
  },
}
</script>
<style></style>
