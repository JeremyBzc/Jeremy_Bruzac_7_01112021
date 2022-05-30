<template>
  <div class="bloc-modale" v-if="displayEditingPost">
    <div class="overlay" v-on:click="toggleModaleEditingPost"></div>
    <div class="modale card">
      <div v-on:click="toggleModaleEditingPost" class="btn-modale btn btn-dark">
        x
      </div>
      <div class="border-bottom">
        <h2 class="modale-section">Modifier la publication</h2>
      </div>
      <div>
        <div class="form-row">
          <input
            v-model="post.title"
            placeholder="Titre"
            type="text"
            class="form-control text-center"
          />
        </div>
        <div class="form-row">
          <input
            v-model="post.content"
            placeholder="Contenu"
            type="text"
            class="form-control text-center"
          />
        </div>
      </div>
      <button @click.prevent="editPost()" class="btn btn-success">
        Modifier la publication
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModaleEditPost',
  props: ['displayEditingPost', 'toggleModaleEditingPost', 'postId'],
  data() {
    return {
      post: {
        userId: this.$store.state.users.user.userId,
        //postId: this.post.id,
        title: '',
        content: '',
      },
    }
  },
  methods: {
    editPost() {
      const payload = { post: this.post, postId: this.postId }
      this.$store
        .dispatch('editPost', payload)
        .then(() => {
          console.log('success')
          //window.location.reload()
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
<style>
.overlay {
  background: rgba(243, 244, 246, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.modale {
  color: #333;
  padding: 50px;
  border-radius: 25px;
}
.modale input {
  margin-bottom: 20px;
}
.btn-modale {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  border-radius: 25px 0 15px 0;
}
.modale-section {
  font-size: 20px;
  color: rgb(190, 18, 60);
}
</style>
