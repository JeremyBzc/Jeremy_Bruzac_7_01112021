<template>
  <div>
    <div class="row">
      <div class="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0">
        <div class="card-profile">
          <div class="row justify-content-center">
            <div class="col-lg-12 d-flex justify-content-center">
              <h1>Votre espace personnel</h1>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="text-center pt-8 pt-md-4 pb-0 pb-md-4">
              <div class="card-body d-flex align-items-center">
                <a href="#">
                  <img src="../assets/Userdefault.png" width="150" />
                </a>
                <h3 class="font-weight-bold">
                  {{ user.firstName + ' ' + user.lastName }}
                </h3>
              </div>
            </div>
            <div class="card-body d-flex flex-column align-items-start">
              <h2>À propos de moi</h2>
              <div class="d-flex flex-column align-items-start">
                <p>
                  {{ user.firstName + ' ' + user.lastName }}
                </p>
                <p>Email: {{ user.email }}</p>
              </div>
            </div>
            <div class="card-body d-flex flex-column align-items-start">
              <h2>Biographie</h2>
              <div class="d-flex flex-column align-items-start">
                <p>{{ user.bio }}</p>
              </div>
            </div>
            <div class="card-body d-flex flex-column align-items-start">
              <h2>Informations sur le compte</h2>
              <div>
                <p>Date d'inscription: {{ user.createdAt }}</p>
              </div>
            </div>
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

<style>
.card-body {
  border: 2px solid #f0f0f0;
  border-radius: 25px;
  margin-bottom: 10px;
  box-shadow: 10px 5px 15px rgba(128, 128, 128, 0.3);
}
</style>
