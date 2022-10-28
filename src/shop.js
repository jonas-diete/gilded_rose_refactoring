const StockItem = require('../src/stockItem');
const BetterWithAge = require('../src/betterWithAge');
const Sulfuras = require('../src/sulfuras');
const BackstagePass = require('../src/backstagePass');
const ConjuredItem = require('../src/conjuredItem')

class Shop {
  constructor(items = []) {
    this.items = this.classItems(items);
  }

  classItems(items) {
    const classedItems = items.map((item) => {
      if (item.name === "Aged Brie") {
        return new BetterWithAge(item.name, item.sellIn, item.quality);
      } else if (item.name.includes('Backstage passes')) {
        return new BackstagePass(item.name, item.sellIn, item.quality);
      } else if (item.name.includes('Sulfuras')) {
        return new Sulfuras(item.name, item.sellIn, item.quality);
      } else if (item.name.includes('Conjured')) {
        return new ConjuredItem(item.name, item.sellIn, item.quality);
      } else {
        return new StockItem(item.name, item.sellIn, item.quality);
      }
    })
    return classedItems;
  }

  updateQuality() {
    this.items.forEach(item => item.updateValues())
  }
}

module.exports = Shop;