const Shop = require('../src/shop');
const Item = require('../src/item');

describe('Shop', () => {
  it('lowers the quality for an item', () => {
    let item = new Item('Lembas Bread', 10, 5);
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(4);
  })

  it('lowers the quality for an item', () => {
    let item = new Item('Rusty Axe', 25, 13);
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(12);
  })

  it('lowers the quality for multiple items', () => {
    let item1 = new Item('Lembas Bread', 10, 5);
    let item2 = new Item('Rusty Axe', 25, 13);
    const gildedRose = new Shop([item1, item2]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(4);
    expect(gildedRose.items[1].quality).toBe(12);
  })

  it('lowers the quality for multiple items, multiple times', () => {
    let item1 = new Item('Lembas Bread', 10, 5);
    let item2 = new Item('Rusty Axe', 25, 13);
    const gildedRose = new Shop([item1, item2]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(2);
    expect(gildedRose.items[1].quality).toBe(10);
  })

  it('lowers the sellIn for multiple items', () => {
    let item1 = new Item('Lembas Bread', 10, 5);
    let item2 = new Item('Rusty Axe', 25, 13);
    const gildedRose = new Shop([item1, item2]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(9);
    expect(gildedRose.items[1].sellIn).toBe(24);
  })

  it('lowers the sellIn for multiple items, multiple times', () => {
    let item1 = new Item('Lembas Bread', 10, 5);
    let item2 = new Item('Rusty Axe', 25, 13);
    const gildedRose = new Shop([item1, item2]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(7);
    expect(gildedRose.items[1].sellIn).toBe(22);
  })

  it('lowers the quality by 2 when sellIn is 0 or negative', () => {
    let item = new Item('Leather Belt', -1, 12);
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(-2);
    expect(gildedRose.items[0].quality).toBe(10);
  })

  it('quality of an item doesnt go below 0', () => {
    let item = new Item('Snake Elixir', 10, 2);
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
  })

  it('Aged Brie increases in quality', () => {
    let item = new Item('Aged Brie', 31, 8)
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(10);
  })

  it('Aged Brie increases in quality even with negative sellIn', () => {
    let item = new Item('Aged Brie', -3, 8)
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(10);
  })

  it('Quality doesnt increase beyond 50', () => {
    let item = new Item('Aged Brie', 12, 49)
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(50);
  })

  it('Sulfuras values dont change', () => {
    const item = new Item('Sulfuras', 100, 32);
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(32);
    expect(gildedRose.items[0].sellIn).toBe(100);
  })

  it('Backstage Passes increase in quality if sellIn is not negative', () => {
    let item = new Item('Backstage passes', 30, 10);
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(13);
    expect(gildedRose.items[0].sellIn).toBe(27);
  })

  it('Backstage Pass quality is 0 if sellIn is 0 or negative', () => {
    let item = new Item('Backstage passes', 0, 10);
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
    expect(gildedRose.items[0].sellIn).toBe(-1);
  })

  it('Backstage Passes increase in quality by 3 if sellIn is 5 or lower but above 0', () => {
    let item = new Item('Backstage passes', 4, 10);
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(13);
    expect(gildedRose.items[0].sellIn).toBe(3);
  })

  it('Backstage Passes increase in quality by 2 if sellIn is 10 or lower but above 5', () => {
    let item = new Item('Backstage passes', 8, 10);
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(12);
    expect(gildedRose.items[0].sellIn).toBe(7);
  })

  it('Conjured items degrade in quality by 2 each day before sellIn', () => {
    let item = new Item('Conjured Sword', 10, 43);
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(41);
  })

  it('Conjured items degrade in quality by 4 each day if sellIn is 0 or negative', () => {
    let item = new Item('Conjured Sword', -3, 43);
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(39);
  })

  it('Conjured items cant have quality lower than 0', () => {
    let item = new Item('Conjured Sword', -3, 5);
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
  })
}) 