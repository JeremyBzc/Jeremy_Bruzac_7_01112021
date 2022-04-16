<template>
  <div class="login">
    <div class="container d-flex justify-content-center">
      <div class="col-6 bg-light shadow p-3 mb-5 bg-white rounded">
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
        <div class="form-row">
          <input
            v-model="email"
            placeholder="Adresse Mail"
            type="email"
            class="form-control"
          />
        </div>
        <br />
        <div class="form-row" v-if="mode == 'create'">
          <input
            v-model="firstName"
            placeholder="Prénom"
            type="text"
            class="form-control"
          />
          <input
            v-model="lastName"
            placeholder="Nom"
            type="text"
            class="form-control"
          />
        </div>
        <br />
        <div class="form-row">
          <input
            v-model="password"
            placeholder="Mot de passe"
            type="password"
            class="form-control"
          />
        </div>
        <div class="form-row" v-if="mode == 'login' && status == 'error_login'">
          Adresse mail ou mot de passe invalide !
        </div>
        <div
          class="form-row"
          v-if="mode == 'create' && status == 'error_create'"
        >
          Adresse mail déjà utilisée !
        </div>
        <div v-if="mode == 'login'" class="text-center mt-4">
          <button
            class="btn btn-success"
            type="submit"
            :disabled="!validatedFields"
            @click.prevent="login()"
          >
            <span v-if="status == 'loading'">Connexion en cours...</span>
            <span v-else>Se connecter</span>
          </button>
        </div>
        <div v-else class="text-center mt-4">
          <button
            class="btn btn-success"
            type="submit"
            :disabled="!validatedFields"
            @click.prevent="onRegister()"
          >
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Login',

  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      mode: 'login',
    }
  },
  methods: {
    // checkUp() {
    //   const EMAIL_REGEX =
    //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //   const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/

    //   if (
    //     !this.checkUp(this.email, EMAIL_REGEX) ||
    //     !this.checkUp(this.password, PASSWORD_REGEX)
    //   ) {
    //     console.log('les informations saisies sont incorrectes')
    //   }
    //   return
    // },

    switchToCreatedAccount() {
      this.mode = 'create'
    },
    switchToLogin() {
      this.mode = 'login'
    },

    onRegister() {
      const self = this
      this.$store
        .dispatch('onRegister', {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
        })
        .then((response) => {
          self.login()
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    login() {
      const self = this
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          self.$router.push('/profiles')
          self.$store.dispatch('limitedAccess', false)
        })
        .catch((error) => {
          console.log(error)
        })

      // try {
      //   const res = await authService.loginUser(inputValues)
      //   console.log(res.data)
      //   this.$store.dispatch('limitedAccess', false)
      //   this.$router.push('/profile')
      // } catch (error) {
      //   console.log(error.error)
      // }
    },
  },
  computed: {
    validatedFields() {
      if (this.mode == 'create') {
        if (
          this.email != '' &&
          this.firstName != '' &&
          this.lastName != '' &&
          this.password != ''
        ) {
          return true
        } else {
          return false
        }
      } else {
        if (this.email != '' && this.password != '') {
          return true
        } else {
          return false
        }
      }
    },
    ...mapState(['status']),
  },
}
</script>
