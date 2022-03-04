<template>
  <div id="app">
    <div id="nav">
      <div>
        <b-navbar type="light" variant="success">
          <b-navbar-nav>
            <b-nav-item href="/">Accueil</b-nav-item>
            <b-nav-item href="/about">L'entreprise</b-nav-item>
            <b-nav-item v-if="register" href="/forum">Le Forum</b-nav-item>
            <!-- Navbar dropdowns -->
            <b-nav-item-dropdown text="Compte" right>
              <b-dropdown-item href="/login"
                ><b-button variant="outline-success"
                  >Se connecter</b-button
                ></b-dropdown-item
              >
              <b-dropdown-item href="/login"
                ><b-button variant="outline-success"
                  >S'inscrire</b-button
                ></b-dropdown-item
              >
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-navbar>
      </div>
      <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
    <footer class="bg-success text-center text-white">
      <!-- Grid container -->
      <div class="container p-4 pb-0">
        <!-- Section: Social media -->
        <section class="mb-4">
          <!-- Facebook -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><i class="fab fa-facebook-f"></i
          ></a>

          <!-- Twitter -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><i class="fas fa-twitter"></i
          ></a>

          <!-- Google -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><i class="fab fa-google"></i
          ></a>

          <!-- Instagram -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><i class="fab fa-instagram"></i
          ></a>

          <!-- Linkedin -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><i class="fab fa-linkedin-in"></i
          ></a>

          <!-- Github -->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            ><i class="fab fa-github"></i
          ></a>
        </section>
        <!-- Section: Social media -->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3">
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
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  img {
    display: inline-block;
  }
  .GroupoLogo {
    display: flex;
    height: 100px;
    width: 100px;
  }
  img {
    margin: 0;
    padding: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {
      register: false,
      brand: 'Groupomania',
    }
  },
}
</script>
