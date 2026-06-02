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

    const gemsMap = {};

    for (let i = 0; i < quantity; i++) {

      const dice = this.rollDice(type).toString();

      const gem = await model.findOne({
        where: { dice }
      });

      if (gem) {
        gemsMap[gem.title] = (gemsMap[gem.title] || 0) + 1;
      }
    }

    const gems = Object.entries(gemsMap).map(([name, quantity]) => ({
      name,
      quantity
    }));

    return {
      gems,
      price
    };
  }

  static async generateArts(model, quantity, price, type) {

    const artsMap = {};

    for (let i = 0; i < quantity; i++) {

      const dice = this.rollDice(type).toString();

      const art = await model.findOne({
        where: { dice }
      });

      if (art) {
        artsMap[art.title] = (artsMap[art.title] || 0) + 1;
      }
    }

    const arts = Object.entries(artsMap).map(([name, quantity]) => ({
      name,
      quantity
    }));

    return {
      arts,
      price
    };
  }

  static async generateMagicItems(model, quantity) {

    const itemsMap = {};

    for (let i = 0; i < quantity; i++) {

      const dice = this.rollDice(100).toString();

      const item = await model.findOne({
        where: { dice }
      });

      if (item) {
        itemsMap[item.title] = (itemsMap[item.title] || 0) + 1;
      }
    }

    const items = Object.entries(itemsMap).map(([name, quantity]) => ({
      name,
      quantity
    }));

    return items;
  }
}

module.exports = TreasureGenerator;