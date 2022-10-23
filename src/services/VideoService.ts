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
        await http.get("search", {params: data  }).subscribe({
            next: (response: AxiosResponse) => {
                this.videoStore.videos = response.data;
                this.videoStore.loading = false;
            },
        })
    }
    }