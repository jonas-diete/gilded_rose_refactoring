const StockItem = require('./stockItem');

class ConjuredItem extends StockItem {
  constructor(name, sellIn, quality) {
    super();
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.qualityChangeRate = -2;
  }

  updateValues() {
    if (this.sellIn <= 0) {this.qualityChangeRate = -4;}
    super.setValues();
    if (this.quality < 0) {this.quality = 0;}
  }
}

module.exports = ConjuredItem;