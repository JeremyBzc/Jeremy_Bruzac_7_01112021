<template>
  <div>
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
            {{ post.content }}
          </p>
        </div>
        <div class="d-flex justify-content-end border-top border-success">
          <p>Par {{ post.User.firstName + ' ' + post.User.lastName }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    post: Object,
  },
  computed: {
    ...mapState({
      //post: (state) => state.posts.posts,
      user: (state) => state.users.user,
    }),
  },
}
</script>
<style>
.card-post {
  border: 2px solid #f0f0f0;
  margin-bottom: 10px;
  box-shadow: 10px 5px 15px rgba(128, 128, 128, 0.3);
  border-radius: 25px;
}
</style>
