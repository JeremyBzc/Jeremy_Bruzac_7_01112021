<template>
  <div>
    <router-link :to="`forum/${post.id}`">
      <h3>{{ post.title }}</h3>
      <p for="description">{{ post.description }}</p>
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
