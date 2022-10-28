const Shop = require("./src/shop");
const Item = require("./src/Item");

const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 4, 39),
  new Item("Elixir of the Mongoose", 2, 12),
  new Item("Sulfuras, Hand of Ragnaros", 3, 80),
  new Item("Sulfuras, Hand of Ragnaros", -4, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 12),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  new Item("Conjured Mana Cake", 3, 6),
];

const days = Number(process.argv[2]) || 2;
const gildedRose = new Shop(items);

console.log("Welcome to the Gilded Rose!");

for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  gildedRose.items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}