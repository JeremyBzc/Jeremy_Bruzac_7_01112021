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
        <div class="form-row">
          <input
            type="file"
            name="image"
            id="File"
            ref="file"
            accept=".jpg, .jpeg, .png"
            @change="onFileSelected"
            class="form-control"
          />
        </div>
      </div>
      <button
        @click.prevent="editPost()"
        :disabled="!validatedFields"
        type="submit"
        class="btn btn-success"
      >
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
        title: '',
        content: '',
        attachment: '',
      },
    }
  },
  methods: {
    onFileSelected() {
      this.post.attachment = this.$refs.file.files[0]
      console.log(this.post.attachment)
    },
    editPost() {
      const fd = new FormData()
      fd.append('title', this.post.title)
      fd.append('content', this.post.content)
      fd.append('attachment', this.post.attachment)
      const payload = { post: fd, postId: this.postId }
      console.log(payload)
      this.$store
        .dispatch('editPost', payload)
        .then(() => {
          console.log('success')
          this.$router.go()
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  computed: {
    validatedFields() {
      if (this.post.title != '' && this.post.content != '') {
        return true
      } else {
        return false
      }
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
