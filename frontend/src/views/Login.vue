<template>
  <div class="login">
    <div class="container d-flex justify-content-center">
      <div
        v-if="isRegister"
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
              :disabled="!completedLogin"
              @click.prevent="login"
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
      <div v-else class="col-6 bg-light shadow p-3 mb-5 bg-white rounded">
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
          <a href="/login" v-if="isRegister">Déjà inscrit ? Connectez-vous !</a>
          <div class="text-center mt-4">
            <button
              class="btn btn-success"
              type="submit"
              :disabled="!completedRegister"
              @click.prevent="onRegister"
            >
              S'inscrire
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
      isRegister: true,
    }
  },
  methods: {
    checkUp() {
      const EMAIL_REGEX =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/

      if (
        !this.checkUp(this.email, EMAIL_REGEX) ||
        !this.checkUp(this.password, PASSWORD_REGEX)
      ) {
        console.log('les informations saisies sont incorrectes')
      }
      return
    },

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
        // this.$store.register = true
        this.$router.push('/profile')
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
        this.$store.dispatch('limitedAccess', false)
        this.$router.push('/profile')
      } catch (error) {
        console.log(error.error)
      }
    },
  },
  computed: {
    completedRegister() {
      return (
        this.inputRegister.lastName.length > 0 &&
        this.inputRegister.firstName.length > 0 &&
        this.inputRegister.email.length > 0 &&
        this.inputRegister.password.length > 0
      )
    },
    completedLogin() {
      return (
        this.inputLogin.email.length > 0 && this.inputLogin.password.length > 0
      )
    },
  },
}
</script>
