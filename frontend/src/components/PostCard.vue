<template>
  <div>
    <router-link
      style="text-decoration: none; color: inherit"
      :to="`forum/${post.id}`"
    >
      <div class="p-3">
        <div class="d-flex justify-content-between">
          <p class="card-title font-weight-bolder">
            <font-awesome-icon
              :icon="['fas-solid', 'fa-globe']"
              class="icon-grp mr-3"
            />{{ post.title }}
          </p>
          <p>0 messages</p>
          <div
            class="
              card-infos
              d-flex
              flex-column
              align-items-end
              border-left border-success
              p-3
            "
          >
            <p class="font-weight-bold">
              Par {{ post.User.firstName + ' ' + post.User.lastName }}
            </p>

            <p class="font-weight-light">
              Le {{ post.createdAt | formatDate }}
            </p>
          </div>
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
.card-infos {
  line-height: 10px;
}
.icon-grp {
  color: #be123c;
}
</style>
