<template>
  <div class="bloc-modale" v-if="display">
    <div class="overlay" v-on:click="toggleModale"></div>
    <div class="modale card">
      <div v-on:click="toggleModale" class="btn-modale btn btn-dark">x</div>
      <button v-on:click="deleteUserProfile" class="btn btn-danger">
        Supprimer le compte
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Modale',
  props: ['display', 'toggleModale'],
  data() {
    return {
      userId: this.$store.state.users.user.userId,
    }
  },
  methods: {
    deleteUserProfile() {
      this.$store
        .dispatch('deleteUserProfile', this.userId)
        .then(() => {
          console.log('success_delete')
          window.location.reload()
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.users.user,
    }),
  },
}
</script>
<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.modale {
  background: #f1f1f1;
  color: #333;
  padding: 40px;
  border-radius: 25px;
}
.btn-modale {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  border-radius: 25px 0 15px 0;
}
</style>
