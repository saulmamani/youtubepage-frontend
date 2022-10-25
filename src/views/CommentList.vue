<template>
<div>
  ---
  <pre>{{comments}}</pre>
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