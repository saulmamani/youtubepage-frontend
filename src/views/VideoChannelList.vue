<template>
  <v-card :loading="loading">
    <v-card-title>
      VIDEOS DEL CANAL
      <v-spacer/>
      <v-btn
          v-if="kind === 'channel'"
          color="green"
          small
          dark
          @click="forceChannelYoutubeVideos()"
      >
        <v-icon>mdi-refresh</v-icon>
        Recargar lista desde Youtube
      </v-btn>
      <v-btn
          icon
          color="red"
          @click="videoStore.showDialog = false"
      >
        X
      </v-btn>
    </v-card-title>
    <v-divider/>
    <v-card-text>
      <video-list
          :videos="videos"
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {Video} from "@/models/Video";
import {videoStore} from "@/store/videoStore";
import VideoList from "@/views/VideoList.vue";
import {VideoService} from "@/services/VideoService";

@Component({
  name: "VideoChannelList",
  components: {VideoList}
})
export default class VideoChannelList extends Vue {
  @Prop() private id!: string;
  @Prop() private kind!: string;
  private videoStore = videoStore();
  private videoService = VideoService.getInstance();

  get loading(): boolean {
    return this.videoStore.loadingChannel;
  }

  get videos(): Video[] {
    return this.videoStore.channelVideos.filter((item: Video) => {
      return item.kind === 'video';
    });
  }

  forceChannelYoutubeVideos() {
    this.videoService.forceChannelYoutubeVideos(this.id);
  }
}
</script>

<style scoped>

</style>