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
      <h2>Evênements</h2>
      <div class="col-12 d-flex justify-content-between">
        <PostForm v-for="(Post, index) in Posts" :key="index" :post="Post" />
      </div>
      <h2>Vie en entreprise</h2>
      <div class="col-12 d-flex justify-content-between">
        <PostForm v-for="(Post, index) in Posts" :key="index" :post="Post" />
      </div>
      <h2>Le Blabla</h2>
      <div class="col-12 d-flex justify-content-between">
        <PostForm v-for="(Post, index) in Posts" :key="index" :post="Post" />
      </div>
      <h2>Écrire une publication</h2>
      <div class="container"></div>
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
}
</script>
