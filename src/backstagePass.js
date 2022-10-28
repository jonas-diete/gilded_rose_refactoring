const BetterWithAge = require('./betterWithAge');

class BackstagePass extends BetterWithAge {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    this.qualityChangeRate = +1;
  }

  updateValues() {
    if (this.sellIn <= 5) {
      this.qualityChangeRate = +3;
    } else if (this.sellIn <= 10) {
      this.qualityChangeRate = +2;
    }
    super.updateValues();
    if (this.sellIn <= 0) {
      this.quality = 0
    }
  }
}

module.exports = BackstagePass;