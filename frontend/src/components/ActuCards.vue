<template>
  <div class="card-actu">
    <b-card>
      <h5>{{ article.title }}</h5>
      <b-card-text for="description">{{ article.description }}</b-card-text>
      <b-button href="#" variant="primary">Lire l'actualité</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'ActuCards',
  props: {
    article: Object,
  },
}
</script>
<style>
.card-actu {
  border: 1px solid gray;
  width: 30%;
}
</style>
