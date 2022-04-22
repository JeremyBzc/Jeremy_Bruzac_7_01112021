<template>
  <div class="row">
    <div class="col-12 col-lg-6 mx-auto mb-4">
      <div class="card mb-4 mb-lg-0 border-dark shadow">
        <div class="card-body text-center">
          <h5 class="post-title">TEST</h5>
          <p class="post-description">TEST</p>
          <p class="post-author">TEST</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  date() {
    return {}
  },
  created() {
    let postId = this.$route.params.id
    console.log(postId)
  },
}
</script>

<style lang="scss" scoped></style>
