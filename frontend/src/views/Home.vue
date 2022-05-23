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
    <div class="body my-5">
      <div><h2>Notre Crédo</h2></div>
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <cite
              class="
                card-body
                credo
                font-weight-bold
                text-align-center
                border-success
              "
            >
              "Une entreprise éco-responsable qui valorise ses employés au
              quotidien !"
            </cite>
          </div>
        </div>
      </div>
      <div><h2>Nos trois piliers</h2></div>
      <div class="container">
        <div class="row">
          <Pillars></Pillars>
        </div>
      </div>
      <div><h2>La météo du jour</h2></div>
      <div class="container-light">
        <div class="row">
          <WeatherCard />
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
h2 {
  background-color: rgba(190, 18, 60, 0.3);
}
</style>

<script>
// @ is an alias to /src
import Pillars from '../components/Pillars.vue'
import WeatherCard from '../components/WeatherCard.vue'

export default {
  name: 'Home',
  components: { Pillars, WeatherCard },
}
</script>
