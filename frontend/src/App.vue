<template>
  <div id="app">
    <div id="nav">
      <div>
        <b-navbar
          type="light"
          class="d-flex justify-content-between bg-success"
        >
          <div class="Brand">
            <img src="@/assets/Logo_groupomania2.png" alt="Logo Groupomania" />
          </div>
          <b-navbar-nav class="">
            <b-nav-item class="pr-4" to="/">Accueil</b-nav-item>
            <b-nav-item class="pr-4" to="/about">L'entreprise</b-nav-item>
            <b-nav-item class="pr-4" to="/forum" v-if="autorisedUser"
              >Le Forum</b-nav-item
            >
            <!-- Navbar dropdowns -->
            <b-nav-item-dropdown text="Compte" right>
              <b-dropdown-item v-if="autorisedUser" to="/profile"
                ><b-button variant="outline-success"
                  >Votre profile</b-button
                ></b-dropdown-item
              >
              <b-dropdown-item v-if="!autorisedUser" to="/login"
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
  </div>
</template>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  h2 {
    font-weight: 600;
    letter-spacing: 3px;
  }
}

#nav {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
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
import { mapState } from 'vuex'
export default {
  data() {
    return {
      brand: 'Groupomania',
      register: true,
    }
  },
  computed: {
    ...mapState({
      autorisedUser: (state) => state.users.user.userId != -1,
    }),
  },
}
</script>
