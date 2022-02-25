<template>
  <div class="login">
    <div class="container d-flex">
      <div class="col-6 bg-light shadow p-3 mb-5 bg-white rounded">
        <form>
          <p class="h4 text-center mb-4 border border-success">S'inscrire</p>
          <label for="defaultFormRegisterNameEx" class="grey-text"
            >Votre nom</label
          >
          <input
            type="text"
            id="defaultFormRegisterNameEx"
            class="form-control"
          />
          <br />
          <label for="defaultFormRegisterEmailEx" class="grey-text"
            >Votre email</label
          >
          <input
            type="email"
            id="defaultFormRegisterEmailEx"
            class="form-control"
          />
          <br />
          <label for="defaultFormRegisterConfirmEx" class="grey-text"
            >Confirmez votre email</label
          >
          <input
            type="email"
            id="defaultFormRegisterConfirmEx"
            class="form-control"
          />
          <br />
          <label for="defaultFormRegisterPasswordEx" class="grey-text"
            >Votre Mot de passe</label
          >
          <input
            type="password"
            id="defaultFormRegisterPasswordEx"
            class="form-control"
          />
          <div class="text-center mt-4">
            <button class="btn btn-success" type="submit">S'inscrire</button>
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
    }
  },
}
</script>
