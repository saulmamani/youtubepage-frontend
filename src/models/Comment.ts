export class Comment{
    constructor(
        public id: string = '0',
        public kind: string = '',
        public textDisplay: string = '',
        public authorDisplayName: string = '',
        public authorProfileImageUrl: string = '',
        public likeCount: number = 0,
    ) {
    }
}