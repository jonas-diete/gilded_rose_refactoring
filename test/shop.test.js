const Shop = require("../src/shop");

describe('Shop', () => {
  it('lowers the value for an item', () => {
    let fakeItem = {
      name: 'Lembas Bread',
      sellIn: 10,
      quality: 5
    }
    const shop = new Shop([fakeItem]);
    const updatedItems = shop.updateQuality();
    expect(updatedItems[0].quality).toBe(4);
  })
}) 