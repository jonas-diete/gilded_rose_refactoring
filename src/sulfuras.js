const StockItem = require('./stockItem');

class Sulfuras extends StockItem {
  constructor(name, sellIn, quality) {
    super();
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  // overrides parent function, so qualityChangeRate is not set to -2 when sellIn is 0 or smaller
  updateValues() {}
}

module.exports = Sulfuras;