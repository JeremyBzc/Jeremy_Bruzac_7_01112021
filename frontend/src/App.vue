<template>
  <div id="app">
    <div id="nav">
      <div>
        <b-navbar
          type="light"
          variant="success"
          class="d-flex justify-content-between"
        >
          <div class="Brand">
            <img src="@/assets/Logo_groupomania2.png" alt="Logo Groupomania" />
          </div>
          <b-navbar-nav>
            <b-nav-item class="pr-4" to="/">Accueil</b-nav-item>
            <b-nav-item class="pr-4" to="/about">L'entreprise</b-nav-item>
            <b-nav-item class="pr-4" to="/forum" v-if="!isLimitedAccess"
              >Le Forum</b-nav-item
            >
            <!-- Navbar dropdowns -->
            <b-nav-item-dropdown text="Compte" right>
              <b-dropdown-item v-if="!isLimitedAccess" to="/profile"
                ><b-button variant="outline-success"
                  >Votre profile</b-button
                ></b-dropdown-item
              >
              <b-dropdown-item v-if="isLimitedAccess" to="/login"
                ><b-button variant="outline-success"
                  >Se connecter</b-button
                ></b-dropdown-item
              >
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-navbar>
      </div>
    </div>
    <router-view></router-view>
    <footer class="bg-success text-center text-white">
      <!-- Grid container -->
      <div class="container p-4 pb-0"></div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div id="timestamp" class="text-center p-3">
        © 2021 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/">Groupomania</a>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      background-color: rgba($color: #ffffff, $alpha: 0.4);
      border-radius: 25px;
    }
    .b-nav-item-dropdown:active {
      background-color: rgba($color: #ffffff, $alpha: 0.4);
      border-radius: 25px;
    }

    &.dropdown-item:hover,
    .dropdown-item:focus {
      color: #16181b;
      background-color: transparent;
    }
  }
  .Brand {
    height: 50px;
    width: 25%;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      brand: 'Groupomania',
      register: true,
    }
  },
  computed: {
    isLimitedAccess() {
      return this.$store.state.users.limitedAccess
    },
  },
}
</script>
