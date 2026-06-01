class TreasureGenerator {

  static rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
  }

  static rollMultipleDice(quantity, sides) {
    let total = 0;

    for (let i = 0; i < quantity; i++) {
      total += this.rollDice(sides);
    }

    return total;
  }

  static async generateGems(model, quantity, price, type) {

    const gems = [];

    for (let i = 0; i < quantity; i++) {

      const dice = this.rollDice(type).toString();

      const gem = await model.findOne({
        where: { dice }
      });

      if (gem) {
        gems.push(gem.title);
      }
    }

    return {
      gems,
      price
    };
  }

  static async generateArts(model, quantity, price, type) {

    const arts = [];

    for (let i = 0; i < quantity; i++) {

      const dice = this.rollDice(type).toString();

      const art = await model.findOne({
        where: { dice }
      });

      if (art) {
        arts.push(art.title);
      }
    }

    return {
      arts,
      price
    };
  }

  static async generateMagicItems(model, quantity) {

    const items = [];

    for (let i = 0; i < quantity; i++) {

      const dice = this.rollDice(100).toString();

      const item = await model.findOne({
        where: { dice }
      });

      if (item) {
        items.push(item.title);
      }
    }

    return items;
  }
}

module.exports = TreasureGenerator;