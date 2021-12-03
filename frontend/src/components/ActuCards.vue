<template>
  <div class="card">
    <b-card
      title="Le coup d'oeil"
      img-src="https://www.programmez.com/sites/default/files/experts_photos/kevin-abittan.jpg"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        Comment maintenir une organisation en méthode agile avec des équipes à
        distance ?
      </b-card-text>

      <b-button href="#" variant="primary">Lire l'actualité</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'ActuCards',
  props: {
    msg: String,
  },
}
</script>
