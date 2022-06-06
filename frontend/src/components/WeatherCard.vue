<template>
  <div class="container">
    <div class="row">
      <div class="card-weather col-12">
        <div
          class="card-bg rounded text-white"
          :style="{
            'background-image':
              'url(https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/4/7/3/47343047c5_105832_ciel-bleu-01.jpg)',
          }"
          v-if="temps"
        >
          <div class="border">
            <h3 class="my-3">{{ temps.name + ', ' + temps.sys.country }}</h3>
            <h4 class="my-3">{{ temps.main.temp }}°C</h4>
            <h4 class="my-3">{{ temps.weather[0].description }}</h4>
            <h4 class="my-3">{{ temps.weather.icon }}</h4>
          </div>
        </div>
        <div>
          <input
            class="text-center"
            type="text"
            id="position"
            v-model="requete"
            v-on:keypress="goWeather"
            placeholder="Ville"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      requete: '',
      temps: undefined,
      api_code: '9bbb6d08e396b9847dff909645c1cd03',
      url_search: 'https://api.openweathermap.org/data/2.5/weather?',
    }
  },
  methods: {
    goWeather(e) {
      if (e.key == 'Enter') {
        axios
          .get(
            `${this.url_search}q=${this.requete}&appid=${this.api_code}&units=metric&lang=fr`
          )
          .then((res) => {
            this.temps = res.data
          })
        this.requete = ''
      }
    },
  },
}
</script>
<style>
.card-weather {
  border-radius: 25px;
}
.card-bg {
  padding: 20px;
}
</style>
