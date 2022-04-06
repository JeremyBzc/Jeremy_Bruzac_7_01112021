<template>
  <div class="login">
    <div class="container d-flex justify-content-center">
      <div
        v-if="!register"
        class="col-6 bg-light shadow p-3 mb-5 bg-white rounded"
      >
        <form>
          <p class="h4 text-center mb-4 border border-success">S'inscrire</p>
          <label for="lastname" class="grey-text">Votre nom</label>
          <input
            placeholder="Doe"
            type="text"
            id="lastname"
            name="lastname"
            class="form-control"
            required
            v-model="inputRegister.lastName"
          />
          <br />
          <label for="firstname" class="grey-text">Votre prénom</label>
          <input
            placeholder="John"
            type="text"
            id="firstname"
            name="firstname"
            class="form-control"
            required
            v-model="inputRegister.firstName"
          />
          <br />
          <label for="email" class="grey-text">Votre E-mail</label>
          <input
            placeholder="JohnDoe@groupomania.com"
            type="email"
            id="email"
            name="email"
            class="form-control"
            required
            v-model="inputRegister.email"
          />
          <br />
          <label for="password" class="grey-text">Votre Mot de passe</label>
          <input
            placeholder="Axptdrl1"
            type="password"
            id="password"
            name="password"
            class="form-control"
            required
            v-model="inputRegister.password"
          />
          <a href="/login">Déjà inscrit ? Connectez-vous !</a>
          <div class="text-center mt-4">
            <button
              class="btn btn-success"
              type="submit"
              :disabled="!completed"
              @click.prevent="onRegister"
            >
              S'inscrire
            </button>
          </div>
        </form>
      </div>
      <div
        v-if="!register"
        class="col-6 bg-light shadow p-3 mb-5 bg-white rounded"
      >
        <form>
          <p class="h4 text-center mb-4 border border-success">Se connecter</p>
          <label for="defaultFormLoginEmailEx" class="grey-text"
            >Votre email</label
          >
          <input
            placeholder="JohnDoe@groupomania.com"
            type="email"
            id="emaillog"
            name="emaillog"
            class="form-control"
            required
            v-model="inputLogin.email"
          />
          <br />
          <label for="defaultFormLoginPasswordEx" class="grey-text"
            >Votre Mot de passe</label
          >
          <input
            placeholder="Axptdrl1"
            type="password"
            id="passwordlog"
            name="passwordlog"
            class="form-control"
            required
            v-model="inputLogin.password"
          />
          <div class="text-center mt-4">
            <button
              class="btn btn-success"
              type="submit"
              @click.prevent="login"
              @click="goToProfile()"
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import authService from '../services/authService'

export default {
  name: 'Login',

  data() {
    return {
      register: false,

      inputRegister: {
        lastName: '',
        firstName: '',
        email: '',
        password: '',
      },
      inputLogin: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async onRegister() {
      let inputValues = {
        lastName: this.inputRegister.lastName,
        firstName: this.inputRegister.firstName,
        email: this.inputRegister.email,
        password: this.inputRegister.password,
      }
      try {
        const res = await authService.registerUser(inputValues)
        console.log(res.data)
        this.register = true
      } catch (error) {
        console.log(error.error)
      }
    },

    async login() {
      let inputValues = {
        email: this.inputLogin.email,
        password: this.inputLogin.password,
      }
      try {
        const res = await authService.loginUser(inputValues)
        console.log(res.data)
        this.register = true
      } catch (error) {
        console.log(error.error)
      }
    },
    goToProfile() {
      this.$router.push('/profile')
    },
  },
  computed: {
    completed() {
      return (
        this.inputRegister.lastName.length > 0 &&
        this.inputRegister.firstName.length > 0 &&
        this.inputRegister.email.length > 0 &&
        this.inputRegister.password.length > 0
        // this.inputLogin.email.length > 0 &&
        // this.inputLogin.password.length > 0
      )
    },
  },
}
</script>
