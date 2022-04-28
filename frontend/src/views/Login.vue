<template>
  <div
    class="
      container-fluid
      d-flex
      align-items-center
      justify-content-center
      login
    "
  >
    <div>
      <div class="card-log col-§ bg-light shadow p-3 mb-5 bg-white">
        <h1 class="h4 text-center mb-4" v-if="mode == 'login'">Connection</h1>
        <h1 class="h4 text-center mb-4" v-else>Inscription</h1>
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
        <div
          class="form-row err4"
          v-if="mode == 'login' && status == 'error_login'"
          variant="danger"
        >
          Adresse mail ou mot de passe invalide !
        </div>
        <div
          class="form-row err4"
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
            <span v-else>Continuer</span>
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
    // CRÉER UNE MÉTHODE CheckUp Validité pour vérifier si l'email et le pass = bon pour éviter le then en cas d'error

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
        .then(() => {
          self.login()
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
          self.$router.push('/profile')
          self.$store.dispatch('limitedAccess', false)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    //...mapState(['limitedAccess']),
  },
  mounted() {
    if (this.$store.state.users.user.userId != -1) {
      this.$router.push('/profile')
      return
    }
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
    ...mapState(['status', 'limitedAccess']),
  },
}
</script>
<style>
.err4 {
  color: red;
}
.login {
  min-height: 700px;
}
.card-log {
  border-radius: 25px;
}
</style>
