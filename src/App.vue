<template>
  <v-app id="app">

    <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        color="primary" dark app flat
    >
      <v-toolbar-title
          class="ml-0 pl-4"
      >
        <span><strong style="color: #f6f6f6">YouTube</strong> <span class="font-weight-light">Page</span></span>
      </v-toolbar-title>
      <v-spacer/>
      <span class="font-weight-light">Saul Mamani</span>
      <a title="Acerca de" href="https://saulmamani.github.io" target="_blank">
        <v-icon>mdi-account</v-icon>
      </a>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid grid-list-xl style="background-color: #f6f6f6">
        <v-layout justify-center wrap>
          <v-flex md12>

            <v-row>
              <v-col
                  md="8"
                  offset-md="2"
              >
                <router-view :key="$route.fullPath"></router-view>
              </v-col>
            </v-row>

          </v-flex>
        </v-layout>
      </v-container>
    </v-main>

  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  name: 'App'
})
export default class App extends Vue {
}
</script>

<style lang="scss">
</style>
