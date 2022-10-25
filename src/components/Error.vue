<template>
  <div class="text-center error_page">

    <v-divider></v-divider>

    <h1 class="mt-5 mb-5">
      404
    </h1>
    Page not found!

    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  name: "ErrorComponent"
}
</script>

<style scoped>
.error_page{
  margin: 0 auto;
  padding: 0;
  margin-top: 200px;
  color: grey;
}
</style>