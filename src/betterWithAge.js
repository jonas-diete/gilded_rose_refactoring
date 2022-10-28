const StockItem = require('./stockItem');

class BetterWithAge extends StockItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    this.qualityChangeRate = +1;
  }

  updateValues() {
    super.setValues();
    if (this.quality > 50) {this.quality = 50;}
  }
}

module.exports = BetterWithAge;