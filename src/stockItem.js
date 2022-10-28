const Item = require('./item');

class StockItem extends Item {
  constructor(name, sellIn, quality) {
    super();
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.qualityChangeRate = -1;
    this.sellInChangeRate = -1;
  }

  setValues() {
    this.quality += this.qualityChangeRate;
    this.sellIn += this.sellInChangeRate;
  }

  updateValues() {
    if (this.sellIn <= 0) {this.qualityChangeRate = -2;}
    this.setValues();
    if (this.quality < 0) {this.quality = 0;}
  }
}

module.exports = StockItem;