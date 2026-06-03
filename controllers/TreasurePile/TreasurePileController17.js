const gem_1000 = require("../../models/Gems/gems_1000");
const gem_5000 = require("../../models/Gems/gems_5000");
const art_2500 = require("../../models/ArtObjects/art_2500");
const art_7500 = require("../../models/ArtObjects/art_7500");
const magic_C = require("../../models/MagicItems/magic_C");
const magic_D = require("../../models/MagicItems/magic_D");
const magic_E = require("../../models/MagicItems/magic_E");
const magic_F = require("../../models/MagicItems/magic_F");
const magic_G = require("../../models/MagicItems/magic_G");
const magic_H = require("../../models/MagicItems/magic_H");
const magic_I = require("../../models/MagicItems/magic_I");
const TreasureGenerator = require('../../helpers/TreasureGenerator');

class TreasurePileController11_16 {
  async roll(req, res) {

    const dice = req.params.dice;
    const diceInt = parseInt(dice, 10);

    const poValue = TreasureGenerator.rollMultipleDice(12, 6) * 1000;
    const plValue = TreasureGenerator.rollMultipleDice(8, 6) * 1000;

    let teasure = {
      gems: [],
      gemsPrice: 0,
      arts: [],
      artsPrice: 0,
      itens: [],
      po: poValue,
      pl: plValue
    }

    let gemQuantity = 0;
    let artQuantity = 0;
    let itemQuantity = 0;
    let gems = {};
    let arts = {};

    switch (true) {

      case diceInt >= 1 && diceInt <= 2:
        return res.status(200).json(teasure);

      case diceInt >= 3 && diceInt <= 5:
        gemQuantity = TreasureGenerator.rollMultipleDice(3, 6);

        gems = await TreasureGenerator.generateGems(
          gem_1000,
          gemQuantity,
          1000,
          8
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(8);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_C,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 6 && diceInt <= 8:

        artQuantity = TreasureGenerator.rollMultipleDice(1, 10);

        arts = await TreasureGenerator.generateArts(
          art_2500,
          artQuantity,
          2500,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(8);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_C,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 9 && diceInt <= 11:

        artQuantity = TreasureGenerator.rollMultipleDice(1, 4);

        arts = await TreasureGenerator.generateArts(
          art_7500,
          artQuantity,
          7500,
          8
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(8);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_C,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 12 && diceInt <= 14:
        gemQuantity = TreasureGenerator.rollMultipleDice(1, 8);

        gems = await TreasureGenerator.generateGems(
          gem_5000,
          gemQuantity,
          5000,
          4
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(8);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_C,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 15 && diceInt <= 22:

        gemQuantity = TreasureGenerator.rollMultipleDice(3, 6);

        gems = await TreasureGenerator.generateGems(
          gem_1000,
          gemQuantity,
          1000,
          8
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(6);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_D,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 23 && diceInt <= 30:

        artQuantity = TreasureGenerator.rollMultipleDice(1, 10);

        arts = await TreasureGenerator.generateArts(
          art_2500,
          artQuantity,
          2500,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(6);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_D,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 31 && diceInt <= 38:

        artQuantity = TreasureGenerator.rollMultipleDice(1, 4);

        arts = await TreasureGenerator.generateArts(
          art_7500,
          artQuantity,
          7500,
          8
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(6);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_D,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 39 && diceInt <= 46:

        gemQuantity = TreasureGenerator.rollMultipleDice(1, 8);

        gems = await TreasureGenerator.generateGems(
          gem_5000,
          gemQuantity,
          5000,
          4
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(6);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_D,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 47 && diceInt <= 52:

        gemQuantity = TreasureGenerator.rollMultipleDice(3, 6);

        gems = await TreasureGenerator.generateGems(
          gem_1000,
          gemQuantity,
          1000,
          8
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(6);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_E,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 53 && diceInt <= 58:

        artQuantity = TreasureGenerator.rollMultipleDice(1, 10);

        arts = await TreasureGenerator.generateArts(
          art_2500,
          artQuantity,
          2500,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(6);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_E,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 59 && diceInt <= 63:

        artQuantity = TreasureGenerator.rollMultipleDice(1, 4);

        arts = await TreasureGenerator.generateArts(
          art_7500,
          artQuantity,
          7500,
          8
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(6);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_E,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 64 && diceInt <= 68:

        gemQuantity = TreasureGenerator.rollMultipleDice(1, 8);

        gems = await TreasureGenerator.generateGems(
          gem_5000,
          gemQuantity,
          5000,
          4
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(6);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_E,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt == 69:

        gemQuantity = TreasureGenerator.rollMultipleDice(3, 6);

        gems = await TreasureGenerator.generateGems(
          gem_1000,
          gemQuantity,
          1000,
          8
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_G,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt == 70:

        artQuantity = TreasureGenerator.rollMultipleDice(1, 10);

        arts = await TreasureGenerator.generateArts(
          art_2500,
          artQuantity,
          2500,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_G,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt == 71:

        artQuantity = TreasureGenerator.rollMultipleDice(1, 4);

        arts = await TreasureGenerator.generateArts(
          art_7500,
          artQuantity,
          7500,
          8
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_G,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt == 72:

        gemQuantity = TreasureGenerator.rollMultipleDice(1, 8);

        gems = await TreasureGenerator.generateGems(
          gem_5000,
          gemQuantity,
          5000,
          4
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_G,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt == 73 || diceInt == 74:

        gemQuantity = TreasureGenerator.rollMultipleDice(3, 6);

        gems = await TreasureGenerator.generateGems(
          gem_1000,
          gemQuantity,
          1000,
          8
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_H,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt == 75 || diceInt == 76:

        artQuantity = TreasureGenerator.rollMultipleDice(1, 10);

        arts = await TreasureGenerator.generateArts(
          art_2500,
          artQuantity,
          2500,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_H,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt == 77 || diceInt == 78:

        artQuantity = TreasureGenerator.rollMultipleDice(1, 4);

        arts = await TreasureGenerator.generateArts(
          art_7500,
          artQuantity,
          7500,
          8
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_H,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt == 79 || diceInt == 80:

        gemQuantity = TreasureGenerator.rollMultipleDice(1, 8);

        gems = await TreasureGenerator.generateGems(
          gem_5000,
          gemQuantity,
          5000,
          4
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_H,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 81 && diceInt <= 85:

        gemQuantity = TreasureGenerator.rollMultipleDice(3, 6);

        gems = await TreasureGenerator.generateGems(
          gem_1000,
          gemQuantity,
          1000,
          8
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_I,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 86 && diceInt <= 90:

        artQuantity = TreasureGenerator.rollMultipleDice(1, 10);

        arts = await TreasureGenerator.generateArts(
          art_2500,
          artQuantity,
          2500,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_I,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 91 && diceInt <= 95:

        artQuantity = TreasureGenerator.rollMultipleDice(1, 4);

        arts = await TreasureGenerator.generateArts(
          art_7500,
          artQuantity,
          7500,
          8
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_I,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 96 && diceInt <= 100:

        gemQuantity = TreasureGenerator.rollMultipleDice(1, 8);

        gems = await TreasureGenerator.generateGems(
          gem_5000,
          gemQuantity,
          5000,
          4
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_I,
          itemQuantity
        );

        return res.status(200).json(teasure);


      default:
        return res.status(200).json(teasure);

    }


  }
}

module.exports = new TreasurePileController11_16();
