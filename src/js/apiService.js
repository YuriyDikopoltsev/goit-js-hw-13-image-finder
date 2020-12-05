export default class ImageApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    const API_KEY = '19408008-0cd8b8da9ad4c3f2ce4cd6838';
    const BASE_URL = 'https://pixabay.com/api';

    const response = await fetch(
      `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
    );

    const newImages = await response.json();

    this.page += 1;
    return newImages.hits;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
