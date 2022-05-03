<template>
  <div class="bloc-modale" v-if="display">
    <div class="overlay" v-on:click="toggleModale"></div>
    <div class="modale card">
      <div v-on:click="toggleModale" class="btn-modale btn btn-dark">x</div>
      <button v-on:click="logOut" class="btn btn-danger">
        Supprimer le compte
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modale',
  props: ['display', 'toggleModale', 'logOut'],
}
</script>
<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.modale {
  background: #f1f1f1;
  color: #333;
  padding: 40px;
  border-radius: 25px;
}
.btn-modale {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  border-radius: 25px 0 15px 0;
}
</style>
