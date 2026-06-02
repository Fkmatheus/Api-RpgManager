const gem_10 = require("../../models/Gems/gems_10");
const gem_50 = require("../../models/Gems/gems_50");
const art_25 = require("../../models/ArtObjects/art_25");
const magic_A = require("../../models/MagicItems/magic_A");
const magic_B = require("../../models/MagicItems/magic_B");
const magic_C = require("../../models/MagicItems/magic_C");
const magic_F = require("../../models/MagicItems/magic_F");
const magic_G = require("../../models/MagicItems/magic_F");
const TreasureGenerator = require('../../helpers/TreasureGenerator');

class TreasurePileController0_4 {
  async roll(req, res) {

    const dice = req.params.dice;
    const diceInt = parseInt(dice, 10);

    let teasure = {
      gems: [],
      gemsPrice: 0,
      arts: [],
      artsPrice: 0,
      itens: []
    }

    let gemQuantity = 0;
    let artQuantity = 0;
    let itemQuantity = 0;
    let gems = {};
    let arts = {};



    switch (true) {

      case diceInt >= 1 && diceInt <= 6:
        return res.status(200).json(teasure);

      case diceInt >= 7 && diceInt <= 16:

        gemQuantity = TreasureGenerator.rollMultipleDice(2, 6);

        gems = await TreasureGenerator.generateGems(
          gem_10,
          gemQuantity,
          10,
          12
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        return res.status(200).json(teasure);

      case diceInt >= 17 && diceInt <= 26:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_25,
          artQuantity,
          25,
          12
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        return res.status(200).json(teasure);

      case diceInt >= 27 && diceInt <= 36:

        gemQuantity = TreasureGenerator.rollMultipleDice(2, 6);

        gems = await TreasureGenerator.generateGems(
          gem_50,
          gemQuantity,
          50,
          12
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        return res.status(200).json(teasure);

      case diceInt >= 37 && diceInt <= 44:

        gemQuantity = TreasureGenerator.rollMultipleDice(2, 6);

        gems = await TreasureGenerator.generateGems(
          gem_10,
          gemQuantity,
          10,
          12
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(6);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_A,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 45 && diceInt <= 52:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_25,
          artQuantity,
          25,
          12
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(6);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_A,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 53 && diceInt <= 60:

        gemQuantity = TreasureGenerator.rollMultipleDice(2, 6);

        gems = await TreasureGenerator.generateGems(
          gem_50,
          gemQuantity,
          50,
          12
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(6);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_A,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 61 && diceInt <= 65:

        gemQuantity = TreasureGenerator.rollMultipleDice(2, 6);

        gems = await TreasureGenerator.generateGems(
          gem_10,
          gemQuantity,
          10,
          12
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_B,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 66 && diceInt <= 70:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_25,
          artQuantity,
          25,
          12
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_B,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 71 && diceInt <= 75:

        gemQuantity = TreasureGenerator.rollMultipleDice(2, 6);

        gems = await TreasureGenerator.generateGems(
          gem_50,
          gemQuantity,
          50,
          12
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_B,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 76 && diceInt <= 78:
        gemQuantity = TreasureGenerator.rollMultipleDice(2, 6);

        gems = await TreasureGenerator.generateGems(
          gem_10,
          gemQuantity,
          10,
          12
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_C,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt == 79 || diceInt == 80:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_25,
          artQuantity,
          25,
          12
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_C,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 81 && diceInt <= 85:

        gemQuantity = TreasureGenerator.rollMultipleDice(2, 6);

        gems = await TreasureGenerator.generateGems(
          gem_50,
          gemQuantity,
          50,
          12
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_C,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 86 && diceInt <= 92:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_25,
          artQuantity,
          25,
          12
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_F,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 93 && diceInt <= 97:

        gemQuantity = TreasureGenerator.rollMultipleDice(2, 6);

        gems = await TreasureGenerator.generateGems(
          gem_50,
          gemQuantity,
          50,
          12
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_F,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt == 98 || diceInt == 99:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_25,
          artQuantity,
          25,
          12
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(1);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_G,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt == 100:

        gemQuantity = TreasureGenerator.rollMultipleDice(2, 6);

        gems = await TreasureGenerator.generateGems(
          gem_50,
          gemQuantity,
          50,
          12
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(1);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_G,
          itemQuantity
        );

        return res.status(200).json(teasure);
      
      default:
        return res.status(200).json(teasure);

    }

  }
}

module.exports = new TreasurePileController0_4();
