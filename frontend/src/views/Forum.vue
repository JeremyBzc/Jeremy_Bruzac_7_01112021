<template>
  <div class="forum">
    <div class="container mb-5">
      <div class="col-lg-12 bg-success my-5">
        <h1 class="text-light">Le Forum</h1>
      </div>
      <div class="col-12 d-flex justify-content-between my-5">
        <PostCard v-for="(post, index) in posts" :key="index" :post="post" />
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
            <h1 class="h4 text-center mb-4">Votre publication</h1>
            <div class="form-row">
              <input
                v-model="title"
                placeholder="Titre"
                type="text"
                class="form-control"
              />
            </div>
            <br />
            <div class="form-row">
              <textarea
                v-model="content"
                placeholder="Contenu"
                type="textarea"
                class="form-control"
              />
            </div>
            <div class="text-center mt-4">
              <button class="btn btn-success" type="submit">Envoyer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from '../components/PostCard.vue'
export default {
  components: {
    PostCard,
  },
  data() {
    return {
      mode: 'empty',
    }
  },
  methods: {
    switchToPost() {
      this.mode = 'post'
    },
    switchToEmpty() {
      this.mode = 'empty'
    },
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts // Fonction pour retourner les posts
    },
  },
  mounted: function () {
    if (this.$store.state.users.user.userId == -1) {
      this.$router.push('/login')
      return
    }
  },
}
</script>
<style></style>
