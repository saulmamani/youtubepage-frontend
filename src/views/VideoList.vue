<template>
  <div>
    <v-card
        outlined
        class="mt-2"
        v-for="(video, i) in videos"
        :key="i"
    >
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="12">
          <v-card class="mx-auto text-center" outlined @click="viewDetail(video)">
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
          <div class="cursor" @click="viewDetail(video)">
            <v-card-title
                class="text-h5"
                v-text="video.title"
            />
            <v-card-subtitle>{{ video.publishedAt | largeDate }}</v-card-subtitle>
            <v-card-text>
              {{ video.description }}
            </v-card-text>
          </div>
          <v-card-actions>
            <v-spacer/>
            <v-btn
                v-if="video.kind !== 'video'"
                color="primary"
                outlined
                small
                @click="listChannelVideos(video)"
            >
              Lista de videos {{ video.kind === 'channel' ? 'del' : 'de la' }} {{ kindSpanish(video.kind) }}
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from "vue-property-decorator";
import {Video} from "@/models/Video";

@Component({
  name: "VideoList"
})
export default class VideoList extends Vue {
  @Prop() private videos!: Video[];

  kindSpanish(kind: string): string {
    if (kind === "channel") return "CANAL"
    else if (kind === "playlist") return "LISTA DE REPROD."
    else return "VIDEO"
  }

  @Emit()
  listChannelVideos(video:Video) {
    console.log("emit", video);
  }

  viewDetail(video: Video) {
    if (video.kind === 'video') {
      this.$router.push({name: 'detail', params: {id: video.id}})
    }
  }
}
</script>

<style scoped>
.titleColorBackground {
  color: #ffffff;
  background-color: #000000;
  opacity: 0.7;
}

.cursor{
  cursor: pointer;
}
</style>