class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async getMostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 30,
        regionCode: 'kr',
      },
    });
    return response.data.items;
  }

  async getDetail(videoId) {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        regionCode: 'kr',
        id: videoId,
      },
    });
    return response.data.items;
  }

  async getChannelInfo(channelId) {
    const response = await this.youtube.get('channels', {
      params: {
        part: 'snippet',
        id: channelId,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 30,
        type: 'video',
        q: query,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }

  async getRelatedVideo(videoId) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 20,
        relatedToVideoId: videoId,
        type: 'video',
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }

  async getComment(videoId) {
    const response = await this.youtube.get('commentThreads', {
      params: {
        part: 'snippet',
        maxResults: 20,
        order: 'relevance',
        videoId: videoId,
      },
    });
    return response.data.items;
  }
}

export default Youtube;
