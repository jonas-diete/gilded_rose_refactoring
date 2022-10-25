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

  it('lowers the sellIn for multiple items', () => {
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
    expect(updatedItems[0].sellIn).toBe(9);
    expect(updatedItems[1].sellIn).toBe(24);
  })

  it('lowers the quality by 2 when sellIn is negative', () => {
    let fakeItem1 = {
      name: 'Leather Belt',
      sellIn: -1,
      quality: 12
    }
    const shop = new Shop([fakeItem1]);
    const updatedItems = shop.updateQuality();
    expect(updatedItems[0].sellIn).toBe(-2);
    expect(updatedItems[0].quality).toBe(10);
  })

  it('quality of an item doesnt go below 0', () => {
    let fakeItem1 = {
      name: 'Snake Elixir',
      sellIn: 10,
      quality: 2
    }
    const shop = new Shop([fakeItem1]);
    shop.updateQuality();
    shop.updateQuality();
    const updatedItems = shop.updateQuality();
    expect(updatedItems[0].quality).toBe(0);
  })

  it('Aged Brie increases in quality', () => {
    let fakeItem1 = {
      name: 'Aged Brie',
      sellIn: 31,
      quality: 8
    }
    const shop = new Shop([fakeItem1]);
    shop.updateQuality();
    const updatedItems = shop.updateQuality();
    expect(updatedItems[0].quality).toBe(10);
  })

  it('Aged Brie increases in quality even with negative sellIn', () => {
    let fakeItem1 = {
      name: 'Aged Brie',
      sellIn: -3,
      quality: 8
    }
    const shop = new Shop([fakeItem1]);
    shop.updateQuality();
    const updatedItems = shop.updateQuality();
    expect(updatedItems[0].quality).toBe(10);
  })

  it('Quality doesnt increase beyond 50', () => {
    let fakeItem1 = {
      name: 'Aged Brie',
      sellIn: 12,
      quality: 49
    }
    const shop = new Shop([fakeItem1]);
    shop.updateQuality();
    const updatedItems = shop.updateQuality();
    expect(updatedItems[0].quality).toBe(50);
  })

  it('Sulfuras values dont change', () => {
    let fakeItem1 = {
      name: 'Sulfuras',
      sellIn: 100,
      quality: 32
    }
    const shop = new Shop([fakeItem1]);
    shop.updateQuality();
    shop.updateQuality();
    const updatedItems = shop.updateQuality();
    expect(updatedItems[0].quality).toBe(32);
    expect(updatedItems[0].sellIn).toBe(100);
  })

  it('Backstage Passes increase in value if sellIn is not negative', () => {
    let fakeItem1 = {
      name: 'Backstage passes',
      sellIn: 30,
      quality: 10
    }
    const shop = new Shop([fakeItem1]);
    shop.updateQuality();
    shop.updateQuality();
    const updatedItems = shop.updateQuality();
    expect(updatedItems[0].quality).toBe(13);
    expect(updatedItems[0].sellIn).toBe(27);
  })
}) 