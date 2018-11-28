export class DataService {
  constructor(apiURL) {
    this.apiURL = 'http://localhost:3000';
  }

  async getCartProducts() {
    const result = await $.ajax({
      url: `${this.apiURL}/cart`,
      type: 'GET'
    });
    return result;
  }
}
