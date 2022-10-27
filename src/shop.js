class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      item.updateValues();
    })

    return this.items;
  }
}

module.exports = Shop;