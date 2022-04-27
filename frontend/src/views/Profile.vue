<template>
  <div>
    <div class="row">
      <div class="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0">
        <div class="card card-profile shadow">
          <div class="row justify-content-center">
            <div class="col-lg-12 d-flex justify-content-center">
              <h1>Votre espace personnel</h1>
            </div>
          </div>
          <div
            class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
          >
            <div class="d-flex justify-content-between">
              <a href="#" class="btn btn-sm btn-info mr-4">Editer</a>
            </div>
            <div class="card-profile-image">
              <a href="#">
                <img src="../assets/Userdefault.png" />
              </a>
            </div>
          </div>
          <div class="card-body pt-0 pt-md-4">
            <div class="row">
              <div class="col"></div>
            </div>
            <div class="text-center">
              <h3 class="font-weight-light">
                {{ user.firstName + ' ' + user.lastName }}
              </h3>
              <div class="h5 font-weight-300">
                <p class="ni location_pin mr-2">{{ user.email }}</p>
              </div>
              <div class="h5 mt-4">
                <i class="ni business_briefcase-24 mr-2">{{ user.bio }}</i>
              </div>
              <hr class="my-4" />
              <cite>
                La clé de la réussite se situe dans le travail d'équipe et
                l'écoute de l'autre.
              </cite>
              <div>
                <button @click="logOut()" class="btn btn-danger">
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
export default {
  name: 'Profile',
  data() {
    return {
      user: null,
    }
  },
  methods: {
    logOut() {
      this.$store.commit('logout')
      this.$router.push('/login')
    },
  },
  async mounted() {
    console.log(this.$store.state.users.user) // Déplacer dans router vue
    if (this.$store.state.users.user.userId == -1) {
      this.$router.push('/login')
      return
    }
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

<style></style>
