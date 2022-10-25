export class VideoDetail{
    constructor(
        public id: string = '',
        public kind: string = '',
        public title: string = '',
        public publishedAt: string = '',
        public description: string = '',
        public image: string = '',
        public channelId: string = '',
        public viewCount: number = 0,
        public likeCount: number = 0,
        public commentCount: number = 0,
    ) {
    }
}