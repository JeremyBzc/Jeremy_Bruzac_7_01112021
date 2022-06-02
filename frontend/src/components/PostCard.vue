<template>
  <div>
    <router-link
      style="text-decoration: none; color: inherit"
      :to="`forum/${post.id}`"
    >
      <div class="p-2 rounded">
        <div class="d-flex justify-content-between">
          <div
            class="
              card-title
              d-flex
              align-items-center
              font-weight-bolder
              text-truncate
            "
          >
            <font-awesome-icon
              :icon="['fas-solid', 'fa-globe']"
              class="icon-grp-forum mr-3"
            />
            <h5 class="text-truncate pl-5">{{ post.title }}</h5>
          </div>
          <div class="card-count d-flex align-items-center">
            <p>0 messages</p>
          </div>
          <div
            class="
              card-infos
              d-flex
              flex-column
              align-items-start
              border-left border-success
              p-3
            "
          >
            <p class="font-weight-bold">
              Par {{ post.User.firstName + ' ' + post.User.lastName }}
            </p>

            <p class="font-weight-light text-muted">
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
import postService from '../services/postService'
export default {
  props: {
    post: Object,
  },
  data() {
    return {}
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
  width: 30%;
  line-height: 10px;
}
.card-title {
  width: 40%;
  position: relative;
}

.icon-grp-forum {
  color: #be123c;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
