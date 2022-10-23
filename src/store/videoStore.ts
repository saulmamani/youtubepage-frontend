import {defineStore} from "pinia";
import {Video} from "@/models/Video";

export const videoStore = defineStore("videoStore", {
    state: () =>
        ({
            loading: false as boolean,
            videos: [] as Video[]
        }),
});