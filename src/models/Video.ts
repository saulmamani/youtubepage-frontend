export class Video{
    constructor(
        public id: number = 0,
        public kind: string = '',
        public tittle: string = '',
        public publishedAt: string = '',
        public description: string = '',
        public imageThumbnail: string = '',
        public image: string = '',
        public channelId: string = '',
    ) {
    }
}