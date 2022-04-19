<template>
  <div class="forum">
    <div class="container">
      <div class="col-12 bg-light shadow p-3 mb-5 bg-white rounded">
        <h1>Groupomania - Le Forum</h1>
      </div>
      <div>
        <b-list-group>
          <b-list-group-item>Les Evênements</b-list-group-item>
          <b-list-group-item>La vie en entreprise</b-list-group-item>
          <b-list-group-item>Le Blabla</b-list-group-item>
        </b-list-group>
      </div>
    </div>
    <div class="container">
      <h2 class="bg-light border my-4">Evênements</h2>
      <div class="col-12 d-flex justify-content-between">
        <PostForm v-for="(Post, index) in Posts" :key="index" :post="Post" />
      </div>
      <h2 class="bg-light border my-4">Vie en entreprise</h2>
      <div class="col-12 d-flex justify-content-between">
        <PostForm v-for="(Post, index) in Posts" :key="index" :post="Post" />
      </div>
      <h2 class="bg-light border my-4">Le Blabla</h2>
      <div class="col-12 d-flex justify-content-between">
        <PostForm v-for="(Post, index) in Posts" :key="index" :post="Post" />
      </div>
      <div class="container jumbotron">
        <h2>Créer une publication</h2>
        <form action="/ma-page-de-traitement" method="post">
          <div>
            <label for="title">Titre :</label>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <label for="msg">Votre Message :</label>
            <textarea id="msg" name="message"></textarea>
          </div>
          <div aria-label="Ajouter à votre publication">
            Ajouter à votre publication
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from '../components/PostForm.vue'
export default {
  components: {
    PostForm,
  },
  data() {
    return {
      Posts: [
        {
          id: 1,
          title: 'Premier post',
          author: 'Jérém',
          date: new Date(),
          description: 'Je suis une description vraiment aboutie',
        },
        {
          id: 2,
          title: 'Le réseau LAN',
          author: 'Kevin',
          date: new Date(),
          description: "J'explique le réseau informatique",
        },
        {
          id: 3,
          title: 'Information sur vos pauses Dej',
          author: 'Admin',
          date: new Date(),
          description: 'Je tiens à vous remercier pour la propreté des locaux',
        },
      ],
    }
  },
  mounted: function () {
    console.log(this.$store.state.user)
    if (this.$store.state.user.userId == -1) {
      this.$router.push('/login')
      return
    }
  },
}
</script>
