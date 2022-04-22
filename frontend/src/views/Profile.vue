<template>
  <div>
    <div class="row">
      <div class="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0">
        <div class="card card-profile shadow">
          <div class="row justify-content-center">
            <div class="col-lg-12 d-flex justify-content-center">
              <h1>Votre profil utilisateur, Id:</h1>
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
              <h3 class="font-weight-light">Jérémy Bruzac</h3>
              <div class="h5 font-weight-300">
                <i class="ni location_pin mr-2"></i>Paris, France
              </div>
              <div class="h5 mt-4">
                <i class="ni business_briefcase-24 mr-2">J'adore le bio</i>
              </div>
              <hr class="my-4" />
              <cite>
                La clé de la réussite se situe dans le travail d'équipe et
                l'écoute de l'autre.
              </cite>
              <button @click="logOut()" class="btn btn-danger">
                Se Déconnecter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ProfileForm from '../components/ProfileForm.vue' // POUR CHANGER LES INFOS USER
import profileService from '../services/profileService'
import { mapState } from 'vuex'

export default {
  name: 'Profile',
  data() {
    return {}
  },
  methods: {
    logOut() {
      this.$store.dispatch('login', {
        email: '',
        password: '',
      })
    },
    // async UserProfile() {
    //   const userToken = JSON.parse(localStorage).getItem('userId', 'token')
    //   const userId = this.$route.params.userId
    //   try {
    //     const res = await profileService.getUserProfile
    //   } catch (error) {}
    // },
  },
  mounted: function () {
    console.log(this.$store.state.user)
    if (this.$store.state.user.userId == -1) {
      this.$router.push('/login')
      return
    }
    this.$store.dispatch('getUserProfile')
  },
}
</script>

<style></style>
