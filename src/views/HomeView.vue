<template>
  <div>
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

      </v-col>
    </v-row>

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

  listChannelVideos(kind: string, id: string) {
    this.channelIdSelect = id;
    this.kindSelect = kind;
    this.videoStore.showDialog = true;
    if (kind === 'channel') {
      this.videoService.channelVideos(id);
    } else {
      this.videoService.playlistVideos(id);
    }
  }
}
</script>

<style scoped>

</style>
