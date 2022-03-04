<template>
  <div class="card-post">
    <router-link
      style="text-decoration: none; color: inherit"
      :to="`forum/${post.id}`"
    >
      <h3>{{ post.title }}</h3>
      <p for="description">{{ post.description }}</p>
      <div>
        <p>par: {{ post.author }}</p>
        <p>{{ post.date }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
}
</script>
<style>
.card-post {
  display: flex;
  justify-content: space-between;
  border: 1px solid green;
  border-radius: 25%;
  width: 30%;
}
</style>
