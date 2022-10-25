<template>
  <v-card outlined :loading="loading">
    <v-card-title>
      {{ video.title }}
      <v-spacer/>
      <v-btn outlined @click="volver()">
        Volver
      </v-btn>
    </v-card-title>
    <v-card-subtitle v-if="video.publishedAt">Publicado: {{ video.publishedAt | shortDate }}</v-card-subtitle>
    <v-divider/>

    <v-card-text>
      <v-row>
        <v-col cols="12" lg="7" md="7" sm="12">
          <v-img
              :lazy-src="video.image"
              :src="video.image"
          >
          </v-img>

          <p class="mt-2 text-right" v-if="video.title !== ''">
            <v-icon>mdi-eye</v-icon>
            {{ video.viewCount }}
            <v-icon>mdi-thumb-up</v-icon>
            {{ video.likeCount }}
            <v-icon>mdi-comment</v-icon>
            {{ video.commentCount }}

          </p>
          <p class="text-justify">{{ video.description }}</p>
        </v-col>
        <v-col cols="12" lg="5" md="5" sm="12">
          <comment-list
              :comments="comments"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {videoDetailStore} from "@/store/videoDetailStore";
import {VideoDetail} from "@/models/VideoDetail";
import {Comment} from "@/models/Comment";
import {VideoDetailService} from "@/services/VideoDetailService";
import CommentList from "@/views/CommentList.vue";

@Component({
  name: "VideoDetailView",
  components: {CommentList}
})
export default class VideoDetailView extends Vue {
  private videoDetailStore = videoDetailStore();
  private videoDetailService = VideoDetailService.getInstance();

  get loading(): boolean {
    return this.videoDetailStore.loading;
  }

  get video(): VideoDetail {
    return this.videoDetailStore.videoDetail;
  }

  get comments(): Comment[] {
    return this.videoDetailStore.comments;
  }

  mounted() {
    const id = this.$route.params.id;
    this.getVideoDetail(id);
    this.getComments(id);
  }

  getVideoDetail(id: string) {
    this.videoDetailService.videoDetail(id);
  }

  getComments(id: string) {
    this.videoDetailService.comments(id);
  }

  volver() {
    this.$router.push({name: 'home'});
  }
}
</script>

<style scoped>

</style>