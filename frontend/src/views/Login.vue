<template>
  <div class="login">
    <div class="container d-flex justify-content-center">
      <div class="col-6 bg-light shadow p-3 mb-5 bg-white rounded">
        <form>
          <h1
            class="h4 text-center mb-4 border border-success"
            v-if="mode == 'login'"
          >
            Se connecter
          </h1>
          <h1 class="h4 text-center mb-4 border border-success" v-else>
            S'inscrire
          </h1>
          <p v-if="mode == 'login'">
            Vous n'avez pas de compte ?
            <a class="card__action" @click="switchToCreatedAccount()"
              >Créer un compte</a
            >
          </p>
          <p v-else>
            Vous avez déjà un compte ?
            <a class="card__action" @click="switchToLogin()">Se connecter</a>
          </p>
          <div>
            <input
              v-if="mode == 'login'"
              placeholder="Adresse Mail"
              type="email"
              id="emaillog"
              name="emaillog"
              class="form-control"
              required
              v-model="inputLogin.email"
            />
            <input
              v-else
              placeholder="Adresse Mail"
              type="email"
              id="email"
              name="email"
              class="form-control"
              required
              v-model="inputRegister.email"
            />
          </div>
          <br />
          <div v-if="mode == 'create'">
            <input
              placeholder="Nom"
              type="text"
              id="lastname"
              name="lastname"
              class="form-control"
              required
              v-model="inputRegister.lastName"
            />
            <br />
            <input
              placeholder="Prénom"
              type="text"
              id="firstname"
              name="firstname"
              class="form-control"
              required
              v-model="inputRegister.firstName"
            />
          </div>
          <br />
          <div>
            <input
              v-if="mode == 'login'"
              placeholder="Mot de passe"
              type="password"
              id="passwordlog"
              name="passwordlog"
              class="form-control"
              required
              v-model="inputLogin.password"
            />
            <input
              v-else
              placeholder="Mot de passe"
              type="password"
              id="password"
              name="password"
              class="form-control"
              required
              v-model="inputRegister.password"
            />
          </div>
          <div v-if="mode == 'login'" class="text-center mt-4">
            <button
              class="btn btn-success"
              type="submit"
              :disabled="!completedLogin"
              @click.prevent="login"
            >
              Se connecter
            </button>
          </div>
          <div v-else class="text-center mt-4">
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
      mode: 'login',
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

    switchToCreatedAccount() {
      this.mode = 'create'
    },
    switchToLogin() {
      this.mode = 'login'
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
