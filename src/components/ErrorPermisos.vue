<template>
  <div class="text-center error_page">

    <v-divider></v-divider>

    <h1 class="mt-5 mb-5">
      ¡ No tiene permisos para realizar esta tarea !
    </h1>

    <v-divider/>

    <v-btn class="mt-5" outlined @click="$router.push({name: 'home'})">
        Volver
    </v-btn>
  </div>
</template>

<script lang="ts">
export default {
  name: "ErrorPermisos"
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