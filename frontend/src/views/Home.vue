<template>
  <div class="main">
    <div>
      <b-card
        overlay
        img-src="https://www.bbva.com/wp-content/uploads/2018/04/equipo-startup-bbva-1-e1524492124593-1024x521.jpg"
        img-alt="Image Entreprise"
        variant="success"
        class="Banner"
      >
      </b-card>
    </div>
    <div class="container my-5">
      <div class="row">
        <div class="col-12">
          <div class="home-section mb-5"><h2>Notre Crédo</h2></div>
          <cite
            class="
              card-body
              credo
              font-weight-bold
              d-flex
              text-align-center
              border-success
              mb-5
            "
          >
            "Une entreprise éco-responsable qui valorise ses employés au
            quotidien !"
          </cite>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="home-section mb-5"><h2>Nos trois piliers</h2></div>
          <Pillars></Pillars>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="home-section mb-5"><h2>La météo du jour</h2></div>
          <MapGroupomania />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bg-candy {
  background-color: #be123c;
}
.candy {
  color: #be123c;
}
.credo {
  font-size: 30px;
  color: #be123c;
}
.home-section {
  background-color: rgba(190, 18, 60, 0.8);
  border-radius: 25px;
  color: white;
}
</style>

<script>
// @ is an alias to /src
import Pillars from '../components/Pillars.vue'
import WeatherCard from '../components/WeatherCard.vue'
import MapGroupomania from '../components/Map.vue'

export default {
  name: 'Home',
  components: { Pillars, WeatherCard, MapGroupomania },
}
</script>
