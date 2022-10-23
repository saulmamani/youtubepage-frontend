<template>
  <v-app id="app">

    <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        color="primary" dark app flat
    >
      <v-toolbar-title
          class="ml-0 pl-4"
      >
        <span><strong style="color: #ff4000">YouTube</strong> Page</span>
      </v-toolbar-title>
      <v-spacer/>

      <v-btn icon title="Acerca de">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-main>
      <v-container class="fill-height" fluid grid-list-xl>
        <v-layout justify-center wrap>
          <v-flex md12>
            <router-view :key="$route.fullPath"></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>

  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {globalStore} from "@/store/globalStore";
import {GlobalService} from "@/services/GlobalService";

@Component({
  name: 'App'
})
export default class App extends Vue {
  globalStore = globalStore();
  globalService = GlobalService.getInstance();
}
</script>

<style lang="scss">
</style>
