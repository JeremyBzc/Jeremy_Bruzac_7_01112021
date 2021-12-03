<template>
  <div>
    <div>
      <b-card
        overlay
        img-src="https://www.bbva.com/wp-content/uploads/2018/04/equipo-startup-bbva-1-e1524492124593-1024x521.jpg"
        img-alt="Image Entreprise"
        text-variant="success"
        title="Groupomania"
      >
        <b-card-text>
          Une entreprise de qualité qui valorise ses employés au quotidien
        </b-card-text>
      </b-card>
    </div>
    <div><h1>DERNIÈRES ACTUALITÉS</h1></div>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <ActuCards></ActuCards>
        </div>
        <div class="col-4">
          <ActuCards></ActuCards>
        </div>
        <div class="col-4">
          <ActuCards></ActuCards>
        </div>
      </div>
    </div>
    <div><h1>NOS TROIS PILIERS</h1></div>
    <div class="container">
      <div class="row">
        <Pillars></Pillars>
      </div>
    </div>
    <div><h1>LA MÉTÉO DU JOUR</h1></div>
    <div class="container-light">
      <div>{{ ActuCards }}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ActuCards from '../components/ActuCards.vue'
import Pillars from '../components/Pillars.vue'

export default {
  name: 'Home',
  components: { ActuCards, Pillars },
}
</script>
