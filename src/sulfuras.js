const StockItem = require('./stockItem');

class Sulfuras extends StockItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  // overrides parent function, so the values don't change
  updateValues() {}
}

module.exports = Sulfuras;