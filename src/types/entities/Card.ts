
interface thumbnail {
  url: string,
  height: number,
  width: number,
}
interface badge {
  text: string,
  type: string,
}

export type TVideoData = {
  type: string,
  video: TVideoCard
}

export type TVideoCard = {
  author: {
    avatar: thumbnail[],
    badges: badge[]
    channelId: string,
    title: string
  },
  descriptionSnippet: string,
  lengthSecond: number,
  publishedTimeText: string,
  movingThumbnails: thumbnail[],
  stats: {
    views: number,
  },
  thumbnails: thumbnail[],
  title: string,
  videoId: string,
}

