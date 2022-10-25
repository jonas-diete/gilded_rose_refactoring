class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    const maxQuality = 50;

    this.items.forEach((item) => {
      if (item.sellIn < 0) {
        item = this.lowerQuality(item, -2);
      } else {
        item = this.lowerQuality(item);
      }
      item.sellIn--;
    })

    return this.items;
  }

  lowerQuality(item, rate = -1) {
    item.quality += rate;
    if (item.quality < 0) {
      item.quality = 0;
    }
    return item;
  }
}

module.exports = Shop;