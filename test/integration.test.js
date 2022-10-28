const Shop = require('../src/shop');
const StockItem = require('../src/stockItem');
const BetterWithAge = require('../src/betterWithAge');
const Sulfuras = require('../src/sulfuras');
const BackstagePass = require('../src/backstagePass');
const ConjuredItem = require('../src/conjuredItem')

describe('Shop', () => {
  it('lowers the quality for an item', () => {
    let item = new StockItem('Lembas Bread', 10, 5);
    const gildedRose = new Shop([item]);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(4);
  })

  it('lowers the quality for an item', () => {
    let item = new StockItem('Rusty Axe', 25, 13);
    const gildedRose = new Shop([item]);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(12);
  })

  it('lowers the quality for multiple items', () => {
    let item1 = new StockItem('Lembas Bread', 10, 5);
    let item2 = new StockItem('Rusty Axe', 25, 13);
    const gildedRose = new Shop([item1, item2]);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(4);
    expect(updatedItems[1].quality).toBe(12);
  })

  it('lowers the quality for multiple items, multiple times', () => {
    let item1 = new StockItem('Lembas Bread', 10, 5);
    let item2 = new StockItem('Rusty Axe', 25, 13);
    const gildedRose = new Shop([item1, item2]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(2);
    expect(updatedItems[1].quality).toBe(10);
  })

  it('lowers the sellIn for multiple items', () => {
    let item1 = new StockItem('Lembas Bread', 10, 5);
    let item2 = new StockItem('Rusty Axe', 25, 13);
    const gildedRose = new Shop([item1, item2]);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].sellIn).toBe(9);
    expect(updatedItems[1].sellIn).toBe(24);
  })

  it('lowers the sellIn for multiple items, multiple times', () => {
    let item1 = new StockItem('Lembas Bread', 10, 5);
    let item2 = new StockItem('Rusty Axe', 25, 13);
    const gildedRose = new Shop([item1, item2]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].sellIn).toBe(7);
    expect(updatedItems[1].sellIn).toBe(22);
  })

  it('lowers the quality by 2 when sellIn is 0 or negative', () => {
    let item = new StockItem('Leather Belt', -1, 12);
    const gildedRose = new Shop([item]);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].sellIn).toBe(-2);
    expect(updatedItems[0].quality).toBe(10);
  })

  it('quality of an item doesnt go below 0', () => {
    let item = new StockItem('Snake Elixir', 10, 2);
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(0);
  })

  it('Aged Brie increases in quality', () => {
    let item = new BetterWithAge('Aged Brie', 31, 8)
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(10);
  })

  it('Aged Brie increases in quality even with negative sellIn', () => {
    let item = new BetterWithAge('Aged Brie', -3, 8)
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(10);
  })

  it('Quality doesnt increase beyond 50', () => {
    let item = new BetterWithAge('Aged Brie', 12, 49)
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(50);
  })

  it('Sulfuras values dont change', () => {
    const item = new Sulfuras('Sulfuras', 100, 32);
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(32);
    expect(updatedItems[0].sellIn).toBe(100);
  })

  it('Backstage Passes increase in quality if sellIn is not negative', () => {
    let item = new BackstagePass('Backstage passes', 30, 10);
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(13);
    expect(updatedItems[0].sellIn).toBe(27);
  })

  it('Backstage Pass quality is 0 if sellIn is 0 or negative', () => {
    let item = new BackstagePass('Backstage passes', 0, 10);
    const gildedRose = new Shop([item]);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(0);
    expect(updatedItems[0].sellIn).toBe(-1);
  })

  it('Backstage Passes increase in quality by 3 if sellIn is 5 or lower but above 0', () => {
    let item = new BackstagePass('Backstage passes', 4, 10);
    const gildedRose = new Shop([item]);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(13);
    expect(updatedItems[0].sellIn).toBe(3);
  })

  it('Backstage Passes increase in quality by 2 if sellIn is 10 or lower but above 5', () => {
    let item = new BackstagePass('Backstage passes', 8, 10);
    const gildedRose = new Shop([item]);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(12);
    expect(updatedItems[0].sellIn).toBe(7);
  })

  it('Conjured items degrade in quality by 2 each day before sellIn', () => {
    let item = new ConjuredItem('Conjured Sword', 10, 43);
    const gildedRose = new Shop([item]);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(41);
  })

  it('Conjured items degrade in quality by 4 each day if sellIn is 0 or negative', () => {
    let item = new ConjuredItem('Conjured Sword', -3, 43);
    const gildedRose = new Shop([item]);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(39);
  })

  it('Conjured items cant have quality lower than 0', () => {
    let item = new ConjuredItem('Conjured Sword', -3, 5);
    const gildedRose = new Shop([item]);
    gildedRose.updateQuality();
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].quality).toBe(0);
  })
}) 