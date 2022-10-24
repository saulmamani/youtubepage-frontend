import {videoStore} from "@/store/videoStore";
import {AxiosResponse} from "axios";
import {http} from "@/config/HttpClient";

export class VideoService {
    private static instance: VideoService;

    public static getInstance(): VideoService {
        return this.instance || (this.instance = new this());
    }

    videoStore = videoStore();

    public async search(query: string) {
        const data = {query: query};
        this.videoStore.loading = true;
        this.videoStore.videos = [];
        await http.get("search", {params: data}).subscribe({
            next: (response: AxiosResponse) => {
                this.videoStore.videos = response.data;
                this.videoStore.loading = false;
            },
        })
    }

    public async channelVideos(id: string) {
        const data = {channelId: id};
        this.videoStore.loadingChannel = true;
        this.videoStore.channelVideos = [];
        await http.get("channelVideos", {params: data}).subscribe({
            next: (response: AxiosResponse) => {
                this.videoStore.channelVideos = response.data;
                this.videoStore.loadingChannel = false;
            },
        })
    }

    public async forceChannelYoutubeVideos(id: string) {
        const data = {channelId: id};
        this.videoStore.loadingChannel = true;
        this.videoStore.channelVideos = [];
        await http.get("forceChannelYoutubeVideos", {params: data}).subscribe({
            next: (response: AxiosResponse) => {
                this.videoStore.channelVideos = response.data;
                this.videoStore.loadingChannel = false;
            },
        })
    }

    public async playlistVideos(id: string) {
        const data = {playlistId: id};
        this.videoStore.loadingChannel = true;
        this.videoStore.channelVideos = [];
        await http.get("playlistVideos", {params: data}).subscribe({
            next: (response: AxiosResponse) => {
                this.videoStore.channelVideos = response.data;
                this.videoStore.loadingChannel = false;
            },
        })
    }
}