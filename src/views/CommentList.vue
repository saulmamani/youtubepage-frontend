<template>
<div>
    <div v-if="comments.length <= 0" class="text-center">
      Sin comentarios
    </div>
    <v-list v-else three-line v-for="(comment, index) in comments" :key="index">
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="comment.authorProfileImageUrl"/>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="comment.authorDisplayName" />
            <v-list-item-subtitle v-html="comment.textDisplay" />
            <v-list-item-subtitle class="text-right">
                <v-icon>mdi-thumb-up</v-icon> {{ comment.likeCount }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider/>
    </v-list>
</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {Comment} from "@/models/Comment";
@Component({
  name: "CommentList"
})
export default class CommentList extends Vue{
  @Prop() private  comments!: Comment[];
}
</script>

<style scoped>

</style>