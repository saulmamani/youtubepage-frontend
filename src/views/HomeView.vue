<template>
  <div>
        <div class="d-flex">
          <v-text-field class="pt-5 mr-2" placeholder="Buscar" outlined clearable
                        v-model="query"
                        background-color="#FFFFFF"
                        prepend-inner-icon="mdi-magnify"
                        @keypress.enter="listar()"
          />
          <v-btn class="mt-5" dark x-large color="primary" @click="listar()" :loading="loading"> BUSCAR</v-btn>
        </div>
        <v-divider/>

        <div v-if="!loading" class="pl-2 pr-2 pt-2">
          <video-list
              :videos="videos"
              @list-channel-videos="listChannelVideos"
          />
        </div>

        <div v-else class="text-center">
          <v-progress-circular
              :size="50"
              color="primary"
              indeterminate
          >
          </v-progress-circular>
        </div>

    <v-dialog v-model="showDialog" persistent width="800px">
      <video-channel-list
          :id="channelIdSelect"
          :kind="kindSelect"
      />
    </v-dialog>
  </div>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import {videoStore} from "@/store/videoStore";
import {VideoService} from "@/services/VideoService";
import {Video} from "@/models/Video";
import VideoList from "@/views/VideoList.vue";
import VideoChannelList from "@/views/VideoChannelList.vue";

@Component({
  name: "HomeView",
  components: {VideoChannelList, VideoList},
})
export default class HomeView extends Vue {
  private videoStore = videoStore();
  private videoService = VideoService.getInstance();
  private query = '';
  private channelIdSelect = '';
  private kindSelect = '';

  get loading(): boolean {
    return this.videoStore.loading;
  }

  get videos(): Video[] {
    return this.videoStore.videos;
  }

  get showDialog(): boolean {
    return this.videoStore.showDialog;
  }

  listar() {
    this.videoService.search(this.query);
  }

  listChannelVideos(video:Video) {
    this.channelIdSelect = video.id;
    this.kindSelect = video.kind;
    this.videoStore.showDialog = true;
    if (video.kind === 'channel') {
      this.videoService.channelVideos(video.id);
    } else {
      this.videoService.playlistVideos(video.id);
    }
  }
}
</script>

<style scoped>
</style>
