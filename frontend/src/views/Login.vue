<template>
  <div class="login">
    <div class="container d-flex">
      <div class="col-6 bg-light shadow p-3 mb-5 bg-white rounded">
        <form>
          <p class="h4 text-center mb-4 border border-success">S'inscrire</p>
          <label for="lastname" class="grey-text">Votre nom</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            class="form-control"
            required
            v-model="inputRegister.lastname"
          />
          <br />
          <label for="firstname" class="grey-text">Votre prénom</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            class="form-control"
            required
            v-model="inputRegister.firstname"
          />
          <br />
          <label for="email" class="grey-text">Votre E-mail</label>
          <input
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
            type="password"
            id="password"
            name="password"
            class="form-control"
            required
            v-model="inputRegister.password"
          />
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
        v-if="register"
        class="col-6 bg-light shadow p-3 mb-5 bg-white rounded"
      >
        <form>
          <p class="h4 text-center mb-4 border border-success">Se connecter</p>
          <label for="defaultFormLoginEmailEx" class="grey-text"
            >Votre email</label
          >
          <input
            type="email"
            id="defaultFormLoginEmailEx"
            class="form-control"
          />
          <br />
          <label for="defaultFormLoginPasswordEx" class="grey-text"
            >Votre Mot de passe</label
          >
          <input
            type="password"
            id="defaultFormLoginPasswordEx"
            class="form-control"
          />
          <div class="text-center mt-4">
            <button class="btn btn-success" type="submit">Se connecter</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      register: false,

      inputRegister: {
        lastname: '',
        firstname: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    onregister() {
      let inputValues = {
        lastname: this.inputRegister.lastname,
        firstname: this.inputRegister.firstname,
        email: this.inputRegister.email,
        password: this.inputRegister.password,
      }
      console.log(inputValues)
      // SUITE CHEMIN REQUETE
    },
  },
  computed: {
    completed() {
      return (
        this.inputRegister.lastname.length > 0 &&
        this.inputRegister.firstname.length > 0 &&
        this.inputRegister.email.length > 0 &&
        this.inputRegister.password.length > 0
      )
    },
  },
}
</script>
