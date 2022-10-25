import {AxiosResponse} from "axios";
import {http} from "@/config/HttpClient";
import {videoDetailStore} from "@/store/videoDetailStore";
import {Alert} from "@/addons/Alert";
import {VideoDetail} from "@/models/VideoDetail";

export class VideoDetailService {
    private static instance: VideoDetailService;

    public static getInstance(): VideoDetailService {
        return this.instance || (this.instance = new this());
    }

    videoDetailStore = videoDetailStore();

    public async videoDetail(videoId: string) {
        const data = {videoId: videoId};
        this.videoDetailStore.loading = true;
        this.videoDetailStore.videoDetail = new VideoDetail();
        await http.get("videoDetail", {params: data}).subscribe({
            next: (response: AxiosResponse) => {
                if (response.data.length > 0)
                    this.videoDetailStore.videoDetail = response.data[0];
                else
                    Alert.error("Nungún video encontrado!")
                this.videoDetailStore.loading = false;
            },
        })
    }

    public async comments(videoId: string) {
        const data = {videoId: videoId};
        this.videoDetailStore.loading = true;
        this.videoDetailStore.comments = [];
        await http.get("comments", {params: data}).subscribe({
            next: (response: AxiosResponse) => {
                this.videoDetailStore.comments = response.data;
                this.videoDetailStore.loading = false;
            },
        })
    }
}