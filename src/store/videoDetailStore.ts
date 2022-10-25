import {defineStore} from "pinia";
import {VideoDetail} from "@/models/VideoDetail";
import {Comment} from "@/models/Comment";

export const videoDetailStore = defineStore("videoDetailStore", {
    state: () =>
        ({
            loading: false as boolean,
            videoDetail: new VideoDetail() as VideoDetail,
            comments: [] as Comment[],
        }),
});