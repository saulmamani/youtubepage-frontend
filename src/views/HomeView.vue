<template>
  <v-row>
    <v-col
        md="8"
        offset-md="2"
    >
      <div class="d-flex">
        <v-text-field class="pt-5 mr-2" placeholder="Buscar" outlined clearable
                      v-model="query"
                      @keypress.enter="listar()"
        />
        <v-btn class="mt-5" dark x-large color="primary" outlined @click="listar()" :loading="loading"> BUSCAR</v-btn>
      </div>

      <v-divider/>

      <div v-if="!loading" style="background-color: #f0f0f0" class="pl-2 pr-2 pt-2">

        <v-card
            outlined
            class="mt-2"
            v-for="(video, i) in videos"
            :key="i"
        >
          <v-row>
            <v-col cols="12" lg="4" md="4" sm="12">
              <v-card class="mx-auto text-center" outlined>
                <v-img
                    :lazy-src="video.imageThumbnail"
                    :src="video.image"
                    max-height="180"
                >
                </v-img>
                <v-card-title v-if="video.kind !== 'video'" class="titleColorBackground">
                  {{ kindSpanish(video.kind) }}
                </v-card-title>
              </v-card>
            </v-col>
            <v-col cols="12" lg="8" md="8" sm="12">
              <v-card-title
                  class="text-h5"
                  v-text="video.title"
              />
              <v-card-subtitle>{{ video.publishedAt | largeDate }}</v-card-subtitle>
              <v-card-text>
                {{ video.description }}
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn
                    v-if="video.kind !== 'video'"
                    color="primary"
                    outlined
                    small
                >
                  Lista de videos {{ video.kind === 'channel' ? 'del' : 'de la' }} {{ kindSpanish(video.kind) }}
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>

      </div>

      <div v-else class="text-center">
        <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
        >
        </v-progress-circular>
      </div>

    </v-col>
  </v-row>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import {videoStore} from "@/store/videoStore";
import {VideoService} from "@/services/VideoService";
import {Video} from "@/models/Video";

@Component({
  name: "HomeView",
})
export default class HomeView extends Vue {
  private videoStore = videoStore();
  private videoService = VideoService.getInstance();
  private query = '';

  get loading(): boolean {
    return this.videoStore.loading;
  }

  get videos(): Video[] {
    return this.videoStore.videos;
  }

  kindSpanish(kind: string): string {
    if (kind === "channel") return "CANAL"
    else if (kind === "playlist") return "LISTA DE REPROD."
    else return "VIDEO"
  }

  listar() {
    this.videoService.search(this.query);
  }
}
</script>

<style scoped>
.titleColorBackground {
  color: #ffffff;
  background-color: #000000;
  opacity: 0.7;
}
</style>
