class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items[0].quality = 4;
    return this.items;
  }
}

module.exports = Shop;