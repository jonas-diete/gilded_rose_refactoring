const Shop = require("../src/shop");

describe('Shop', () => {
  it('lowers the quality for an item', () => {
    let fakeItem = {
      name: 'Lembas Bread',
      sellIn: 10,
      quality: 5
    }
    const shop = new Shop([fakeItem]);
    const updatedItems = shop.updateQuality();
    expect(updatedItems[0].quality).toBe(4);
  })

  it('lowers the quality for an item', () => {
    let fakeItem = {
      name: 'Rusty Axe',
      sellIn: 25,
      quality: 13
    }
    const shop = new Shop([fakeItem]);
    const updatedItems = shop.updateQuality();
    expect(updatedItems[0].quality).toBe(12);
  })

  it('lowers the quality for multiple items', () => {
    let fakeItem1 = {
      name: 'Lembas Bread',
      sellIn: 10,
      quality: 5
    }
    let fakeItem2 = {
      name: 'Rusty Axe',
      sellIn: 25,
      quality: 13
    }
    const shop = new Shop([fakeItem1, fakeItem2]);
    const updatedItems = shop.updateQuality();
    expect(updatedItems[0].quality).toBe(4);
    expect(updatedItems[1].quality).toBe(12);
  })
}) 