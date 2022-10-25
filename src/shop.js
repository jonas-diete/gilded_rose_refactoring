class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    const maxQuality = 50;
    const specialItems = ['Aged Brie'];

    this.items.forEach((item) => {
      if (specialItems.includes(item.name)) {
        item = this.updateSpecialItemAttributes(item);
      } else {
        if (item.sellIn < 0) {
          item = this.changeQuality(item, -2);
        } else {
          item = this.changeQuality(item);
        }
        item.sellIn--;
      }
    })
    return this.items;
  }

  updateSpecialItemAttributes(item) {
    if (item.name === 'Aged Brie') {
      item = this.changeQuality(item, 1);
      item.sellIn--;
    }
    return item;
  }

  changeQuality(item, rate = -1) {
    item.quality += rate;
    if (item.quality < 0) {
      item.quality = 0;
    }
    return item;
  }
}

module.exports = Shop;