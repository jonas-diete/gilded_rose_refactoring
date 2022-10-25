class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    const maxQuality = 50;
    const specialItems = ['Aged Brie', 'Sulfuras', 'Backstage passes'];

    this.items.forEach((item) => {
      if (specialItems.includes(item.name)) {
        item = this.updateSpecialItemAttributes(item);
      } else {
        if (item.sellIn <= 0) {
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
    } else if (item.name === 'Backstage passes') {
      if (item.sellIn <= 0) {
        item.quality = 0;
      } else if (item.sellIn <= 5) {
        item = this.changeQuality(item, 3);
      } else if (item.sellIn <= 10) {
        item = this.changeQuality(item, 2);
      } else {
        this.changeQuality(item, 1);
      }
      item.sellIn--;
    }
    return item;
  }

  changeQuality(item, rate = -1) {
    item.quality += rate;
    if (item.quality < 0) {
      item.quality = 0;
    }
    if (item.quality > 50) {
      item.quality = 50;
    }
    return item;
  }
}

module.exports = Shop;