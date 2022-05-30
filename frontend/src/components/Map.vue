<template>
  <div>
    <l-map
      style="height: 500px"
      class="map"
      :zoom="zoom"
      :center="center"
      @update:center="centerUpdated"
      @update:zoom="zoomUpdated"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng"></l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
  name: 'MapGroupomania',
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 20,
      center: [47.41322, -1.219482],
      markerLatLng: [51.504, -0.159],
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }
  },
  methods: {
    centerUpdated(center) {
      return (this.center = center)
    },
    zoomUpdated(zoom) {
      return (this.zoom = zoom)
    },
  },
}
</script>

<style>
.map {
  background-repeat: no-repeat;
  overflow: hidden;
}
</style>
