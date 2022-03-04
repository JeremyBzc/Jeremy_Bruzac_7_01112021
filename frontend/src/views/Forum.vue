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
      <div class="col-12 bg-light border d-block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        pellentesque sit amet orci eget molestie. Duis ultricies vehicula augue,
        ac porta metus aliquam sit amet. Proin euismod ut eros et dapibus. Etiam
        erat lectus, sollicitudin et magna quis, ultrices tempor turpis. Proin
        nulla mi, tincidunt non nisi sit amet, iaculis commodo leo. Sed iaculis
        non massa eget ornare. Donec luctus consequat sapien, aliquet congue
        velit tristique sed. Nullam rhoncus tempus purus quis dictum. Integer
        condimentum odio faucibus erat tincidunt semper. Vestibulum et est ut
        augue laoreet fringilla a ut erat. Fusce commodo, quam ut suscipit
        sodales, diam dui feugiat turpis, et tristique nibh elit vel justo.
      </div>
      <h2>Vie en entreprise</h2>
      <div class="col-12 bg-light border">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        pellentesque sit amet orci eget molestie. Duis ultricies vehicula augue,
        ac porta metus aliquam sit amet. Proin euismod ut eros et dapibus. Etiam
        erat lectus, sollicitudin et magna quis, ultrices tempor turpis.
      </div>
      <div class="col-12 bg-light border">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        pellentesque sit amet orci eget molestie. Duis ultricies vehicula augue,
        ac porta metus aliquam sit amet. Proin euismod ut eros et dapibus. Etiam
        erat lectus, sollicitudin et magna quis, ultrices tempor turpis.
      </div>
      <h2>Le Blabla</h2>
      <div class="col-12 bg-light border">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        pellentesque sit amet orci eget molestie. Duis ultricies vehicula augue,
        ac porta metus aliquam sit amet. Proin euismod ut eros et dapibus. Etiam
        erat lectus, sollicitudin et magna quis, ultrices tempor turpis. Proin
        nulla mi, tincidunt non nisi sit amet, iaculis commodo leo. Sed iaculis
        non massa eget ornare. Donec luctus consequat sapien, aliquet congue
        velit tristique sed. Nullam rhoncus tempus purus quis dictum. Integer
        condimentum odio faucibus erat tincidunt semper. Vestibulum et est ut
        augue laoreet fringilla a ut erat. Fusce commodo, quam ut suscipit
        sodales, diam dui feugiat turpis, et tristique nibh elit vel justo.
      </div>
      <h2>Écrire une publication</h2>
      <div class="container">
        <PostForm v-for="(Post, index) in Posts" :key="index" :post="Post" />
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
          title: 'Soupe',
          author: 'Jérém',
          date: new Date(),
          description: 'Je suis une description',
        },
        {
          id: 2,
          title: 'QD',
          author: 'moi',
          date: new Date(),
          description: 'Je suis une description',
        },
        {
          id: 3,
          title: 'post3',
          author: 'moi',
          date: new Date(),
          description: 'Je suis une description',
        },
      ],
    }
  },
}
</script>
