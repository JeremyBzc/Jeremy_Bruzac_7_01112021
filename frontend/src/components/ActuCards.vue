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
      <b-card-text v-for="article in articles" :key="article.description">{{
        article
      }}</b-card-text>
      <div v-for="article in articles" :key="article.id">
        {{ article.description }}
      </div>
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
  data() {
    return {
      articles: [
        {
          id: 2234,
          title: "Le coup d'oeil",
          image: './assets/images/socks_green.jpg',
          description: 'blabla',
        },

        {
          id: 2235,
          title,
          image: './assets/images/socks_blue.jpg',
          description: 'blabla2',
        },
        {
          id: 2236,
          title,
          image: './assets/images/socks_blue.jpg',
          description: 'blabla3',
        },
      ],
      reviews: [],
    }
  },
}
</script>
