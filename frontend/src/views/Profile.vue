<template>
  <div>
    <div class="row">
      <div class="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0">
        <div class="card-profile mt-5">
          <div class="row justify-content-center">
            <div class="col-lg-12 bg-candy">
              <h1 class="text-light">Votre espace personnel</h1>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="text-center pt-8 pt-md-4 pb-0 pb-md-4">
              <div class="card-body rounded-0 d-flex justify-content-between">
                <div class="d-flex align-items-center">
                  <img
                    class="mr-3"
                    src="../assets/Userdefault.png"
                    width="130"
                  />
                  <h3 class="font-weight-bold">
                    {{ user.firstName + ' ' + user.lastName }}
                  </h3>
                </div>
                <div>
                  <button @click="toggleModaleEditing" class="btn btn-dark">
                    Modifier
                  </button>
                </div>
              </div>
            </div>
            <modaleEdit
              v-bind:displayEditing="displayEditing"
              v-bind:toggleModaleEditing="toggleModaleEditing"
            />
            <div class="card-body d-flex flex-column align-items-start">
              <h2>À propos de moi</h2>
              <div class="d-flex flex-column align-items-start">
                <p>Prénom: {{ user.firstName }}</p>
                <p>Nom: {{ user.lastName }}</p>
                <p>Email: {{ user.email }}</p>
              </div>
            </div>
            <div class="card-body d-flex flex-column align-items-start">
              <h2>Biographie</h2>
              <div class="d-flex flex-column align-items-start">
                <p v-if="user.bio">{{ user.bio }}</p>
                <p v-else>Je suis vide de sens :( Écrivez-moi !</p>
              </div>
            </div>
            <div class="card-body d-flex justify-content-between">
              <div class="d-flex flex-column align-items-start">
                <h2>Informations sur le compte</h2>
                <p>Date d'inscription: {{ user.createdAt | formatDate }}</p>
                <div v-on:click="toggleModale" class="btn btn-danger">
                  Zone Danger
                </div>
                <modale
                  class="pt-3"
                  v-bind:display="display"
                  v-bind:toggleModale="toggleModale"
                  v-bind:logOut="logOut"
                />
              </div>
              <div class="d-flex align-items-end">
                <button @click="logOut()" class="btn btn-dark">
                  Se Déconnecter
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
import profileService from '../services/profileService'
import Modale from '../components/Modale.vue'
import ModaleEdit from '../components/ModaleEdit.vue'

export default {
  name: 'Profile',
  components: {
    modale: Modale,
    modaleEdit: ModaleEdit,
  },
  data() {
    return {
      user: null,
      display: false,
      displayEditing: false,
    }
  },
  methods: {
    toggleModale() {
      this.display = !this.display
    },
    toggleModaleEditing() {
      this.displayEditing = !this.displayEditing
    },
    logOut() {
      this.$store.commit('logout')
      this.$router.push('/login')
    },
  },
  async mounted() {
    const response = await profileService.getUserProfile(
      this.computedUser.userId
    )
    this.user = response.data
  },

  computed: {
    ...mapState({
      computedUser: (state) => state.users.user,
    }),
  },
}
</script>

<style>
.card-body {
  border: 2px solid #f0f0f0;
  border-radius: 25px;
  margin-bottom: 10px;
  box-shadow: 10px 5px 15px rgba(128, 128, 128, 0.3);
}
.bg-candy {
  background-color: #be123c;
}
.candy {
  color: #be123c;
}
</style>
