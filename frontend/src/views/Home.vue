<template>
  <div>
    <div>
      <b-card
        overlay
        img-src="https://www.bbva.com/wp-content/uploads/2018/04/equipo-startup-bbva-1-e1524492124593-1024x521.jpg"
        img-alt="Image Entreprise"
        text-variant="success"
        title="Groupomania"
        class="Banner"
      >
        <b-card-text>
          <h3>
            Une entreprise de qualité qui valorise ses employés au quotidien
          </h3>
        </b-card-text>
      </b-card>
    </div>
    <div><h1>DERNIÈRES ACTUALITÉS</h1></div>
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <ActuCards
            v-for="(Article, index) in Articles"
            :key="index"
            :article="Article"
          />
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
    <div class="container-light"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import ActuCards from '../components/ActuCards.vue'
import Pillars from '../components/Pillars.vue'

export default {
  name: 'Home',
  components: { ActuCards, Pillars },
  data() {
    return {
      Articles: [
        {
          id: 2234,
          title: "Le coup d'oeil",
          description: 'Une révélation',
          image: '@/assets/icon.png',
        },

        {
          id: 2235,
          title: 'Pour le Télétravail ?',
          description: 'Diminution du stress',
        },
        {
          id: 2236,
          title: 'Travailler en chaussettes ?',
          description: 'Un confort assuré',
        },
      ],
    }
  },
}
</script>
