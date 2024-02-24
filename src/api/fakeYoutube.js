import axios from 'axios';

export default class FakeYoutube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY }
    });
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#reactData();
  }

  async #searchByKeyword(keyword) {
    return axios
      .get(`/data/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #reactData() {
    return axios
      .get(`/data/react_data.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
}
