import {defineStore} from "pinia";
import {Video} from "@/models/Video";

export const videoStore = defineStore("videoStore", {
    state: () =>
        ({
            loading: false as boolean,
            loadingChannel: false as boolean,
            showDialog: false,
            videos: [] as Video[],
            channelVideos: [] as Video[]
        }),
});