<template>
  <div class="card-post rounded">
    <router-link
      style="text-decoration: none; color: inherit"
      :to="`forum/${post.id}`"
    >
      <div class="p-3">
        <div class="d-flex flex-column align-items-start">
          <p class="card-title font-weight-bolder">
            {{ post.title }}
          </p>
          <p class="card-content text-truncate" for="description">
            {{ post.description }}
          </p>
        </div>
        <div class="d-flex justify-content-end border-top border-success pt-3">
          <p>Par {{ post.author }}</p>
        </div>
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
  border: 2px solid #f0f0f0;
  margin-bottom: 10px;
  box-shadow: 10px 5px 15px rgba(128, 128, 128, 0.3);
  width: 30%;
  height: 150px;
}
.card-content {
  width: 90%;
}
</style>
