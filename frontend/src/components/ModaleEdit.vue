<template>
  <div class="bloc-modale" v-if="displayEditing">
    <div class="overlay" v-on:click="toggleModaleEditing"></div>
    <div class="modale card">
      <div v-on:click="toggleModaleEditing" class="btn-modale btn btn-dark">
        x
      </div>
      <div class="border-bottom">
        <h2>Modifier les informations</h2>
      </div>
      <div>
        <div class="form-row">
          <input
            v-model="firstName"
            placeholder="Prénom"
            type="text"
            class="form-control text-center"
          />
        </div>
        <div class="form-row">
          <input
            v-model="lastName"
            placeholder="Nom"
            type="text"
            class="form-control text-center"
          />
        </div>
        <div class="form-row">
          <textarea
            v-model="bio"
            placeholder="Biographie"
            type="textarea"
            class="form-control text-center"
          />
        </div>
      </div>
      <button v-on:click="editUserProfile" class="btn btn-success col-2">
        Modifier
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ModaleEdit',
  props: ['displayEditing', 'toggleModaleEditing'],
  data() {
    return {
      userId: this.$store.state.users.user.userId,
      firstName: '',
      lastName: '',
      bio: '',
    }
  },
  methods: {
    editUserProfile() {
      this.$store
        .dispatch('editUserProfile', {
          userId: this.userId,
          firstName: this.firstName,
          lastName: this.lastName,
          bio: this.bio,
        })
        .then(() => {
          console.log('Vos informations ont bien été modifiées !')
          this.$router.go()
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
</style>
