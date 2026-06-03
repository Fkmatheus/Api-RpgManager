const gem_50 = require("../../models/Gems/gems_50");
const gem_100 = require("../../models/Gems/gems_100");
const gem_500 = require("../../models/Gems/gems_500");
const gem_1000 = require("../../models/Gems/gems_1000");
const art_25 = require("../../models/ArtObjects/art_25");
const art_250 = require("../../models/ArtObjects/art_250");
const art_750 = require("../../models/ArtObjects/art_750");
const magic_A = require("../../models/MagicItems/magic_A");
const magic_B = require("../../models/MagicItems/magic_B");
const magic_C = require("../../models/MagicItems/magic_C");
const magic_D = require("../../models/MagicItems/magic_D");
const magic_E = require("../../models/MagicItems/magic_E");
const magic_F = require("../../models/MagicItems/magic_F");
const magic_G = require("../../models/MagicItems/magic_G");
const magic_H = require("../../models/MagicItems/magic_H");
const TreasureGenerator = require('../../helpers/TreasureGenerator');
const magic_I = require("../../models/MagicItems/magic_I");

class TreasurePileController11_16 {
  async roll(req, res) {

    const dice = req.params.dice;
    const diceInt = parseInt(dice, 10);

    const poValue = TreasureGenerator.rollMultipleDice(4, 6) * 1000;
    const plValue = TreasureGenerator.rollMultipleDice(5, 6) * 100;

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
    let teasureItens1 = {};
    let teasureItens2 = {};

    switch (true) {

      case diceInt >= 1 && diceInt <= 3:
        return res.status(200).json(teasure);

      case diceInt >= 4 && diceInt <= 6:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_250,
          artQuantity,
          250,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        return res.status(200).json(teasure);

      case diceInt >= 7 && diceInt <= 9:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_750,
          artQuantity,
          750,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        return res.status(200).json(teasure);

      case diceInt >= 10 && diceInt <= 12:

        gemQuantity = TreasureGenerator.rollMultipleDice(3, 6);

        gems = await TreasureGenerator.generateGems(
          gem_500,
          gemQuantity,
          500,
          6
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        return res.status(200).json(teasure);

      case diceInt >= 13 && diceInt <= 15:

        gemQuantity = TreasureGenerator.rollMultipleDice(3, 6);

        gems = await TreasureGenerator.generateGems(
          gem_1000,
          gemQuantity,
          1000,
          8
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        return res.status(200).json(teasure);

      case diceInt >= 16 && diceInt <= 19:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_250,
          artQuantity,
          250,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasureItens1 = await TreasureGenerator.generateMagicItems(
          magic_A,
          itemQuantity
        );

        itemQuantity = TreasureGenerator.rollDice(6);

        teasureItens2 = await TreasureGenerator.generateMagicItems(
          magic_B,
          itemQuantity
        );

        teasure.itens = [...teasureItens1, ...teasureItens2];

        return res.status(200).json(teasure);

      case diceInt >= 20 && diceInt <= 23:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_750,
          artQuantity,
          750,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasureItens1 = await TreasureGenerator.generateMagicItems(
          magic_A,
          itemQuantity
        );

        itemQuantity = TreasureGenerator.rollDice(6);

        teasureItens2 = await TreasureGenerator.generateMagicItems(
          magic_B,
          itemQuantity
        );

        teasure.itens = [...teasureItens1, ...teasureItens2];

        return res.status(200).json(teasure);

      case diceInt >= 24 && diceInt <= 26:

        gemQuantity = TreasureGenerator.rollMultipleDice(3, 6);

        gems = await TreasureGenerator.generateGems(
          gem_500,
          gemQuantity,
          500,
          6
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasureItens1 = await TreasureGenerator.generateMagicItems(
          magic_A,
          itemQuantity
        );

        itemQuantity = TreasureGenerator.rollDice(6);

        teasureItens2 = await TreasureGenerator.generateMagicItems(
          magic_B,
          itemQuantity
        );

        teasure.itens = [...teasureItens1, ...teasureItens2];

        return res.status(200).json(teasure);

      case diceInt >= 27 && diceInt <= 29:

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

        teasureItens1 = await TreasureGenerator.generateMagicItems(
          magic_A,
          itemQuantity
        );

        itemQuantity = TreasureGenerator.rollDice(6);

        teasureItens2 = await TreasureGenerator.generateMagicItems(
          magic_B,
          itemQuantity
        );

        teasure.itens = [...teasureItens1, ...teasureItens2];

        return res.status(200).json(teasure);

      case diceInt >= 30 && diceInt <= 35:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_250,
          artQuantity,
          250,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(6);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_C,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 36 && diceInt <= 40:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_750,
          artQuantity,
          750,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(6);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_C,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 41 && diceInt <= 45:

        gemQuantity = TreasureGenerator.rollMultipleDice(3, 6);

        gems = await TreasureGenerator.generateGems(
          gem_500,
          gemQuantity,
          500,
          6
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(6);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_C,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 46 && diceInt <= 50:

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
          magic_C,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 51 && diceInt <= 54:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_250,
          artQuantity,
          250,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_D,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 55 && diceInt <= 58:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_750,
          artQuantity,
          750,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_D,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 59 && diceInt <= 62:

        gemQuantity = TreasureGenerator.rollMultipleDice(3, 6);

        gems = await TreasureGenerator.generateGems(
          gem_500,
          gemQuantity,
          500,
          6
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_D,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt >= 63 && diceInt <= 66:

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
          magic_D,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt == 67 || diceInt == 68:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_250,
          artQuantity,
          250,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(1);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_E,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt == 69 || diceInt == 70:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_750,
          artQuantity,
          750,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(1);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_E,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt == 71 || diceInt == 72:

        gemQuantity = TreasureGenerator.rollMultipleDice(3, 6);

        gems = await TreasureGenerator.generateGems(
          gem_500,
          gemQuantity,
          500,
          6
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(1);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_E,
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

        itemQuantity = TreasureGenerator.rollDice(1);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_E,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt == 75 || diceInt == 76:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_250,
          artQuantity,
          250,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasureItens1 = await TreasureGenerator.generateMagicItems(
          magic_F,
          itemQuantity
        );

        itemQuantity = TreasureGenerator.rollDice(4);

        teasureItens2 = await TreasureGenerator.generateMagicItems(
          magic_G,
          itemQuantity
        );

        teasure.itens = [...teasureItens1, ...teasureItens2];

        return res.status(200).json(teasure);

      case diceInt == 77 || diceInt == 78:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_750,
          artQuantity,
          750,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasureItens1 = await TreasureGenerator.generateMagicItems(
          magic_F,
          itemQuantity
        );

        itemQuantity = TreasureGenerator.rollDice(4);

        teasureItens2 = await TreasureGenerator.generateMagicItems(
          magic_G,
          itemQuantity
        );

        teasure.itens = [...teasureItens1, ...teasureItens2];

        return res.status(200).json(teasure);

      case diceInt == 79 || diceInt == 80:

        gemQuantity = TreasureGenerator.rollMultipleDice(3, 6);

        gems = await TreasureGenerator.generateGems(
          gem_500,
          gemQuantity,
          500,
          6
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasureItens1 = await TreasureGenerator.generateMagicItems(
          magic_F,
          itemQuantity
        );

        itemQuantity = TreasureGenerator.rollDice(4);

        teasureItens2 = await TreasureGenerator.generateMagicItems(
          magic_G,
          itemQuantity
        );

        teasure.itens = [...teasureItens1, ...teasureItens2];

        return res.status(200).json(teasure);

      case diceInt == 81 || diceInt == 82:

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

        teasureItens1 = await TreasureGenerator.generateMagicItems(
          magic_F,
          itemQuantity
        );

        itemQuantity = TreasureGenerator.rollDice(4);

        teasureItens2 = await TreasureGenerator.generateMagicItems(
          magic_G,
          itemQuantity
        );

        teasure.itens = [...teasureItens1, ...teasureItens2];

        return res.status(200).json(teasure);

      case diceInt >= 83 && diceInt <= 85:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_250,
          artQuantity,
          250,
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

      case diceInt >= 86 && diceInt <= 88:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_750,
          artQuantity,
          750,
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

      case diceInt == 89 || diceInt == 90:

        gemQuantity = TreasureGenerator.rollMultipleDice(3, 6);

        gems = await TreasureGenerator.generateGems(
          gem_500,
          gemQuantity,
          500,
          6
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(4);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_H,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt == 91 || diceInt == 92:

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

      case diceInt == 93 || diceInt == 94:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_250,
          artQuantity,
          250,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(1);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_I,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt == 95 || diceInt == 96:

        artQuantity = TreasureGenerator.rollMultipleDice(2, 4);

        arts = await TreasureGenerator.generateArts(
          art_750,
          artQuantity,
          750,
          10
        );

        teasure.arts = arts.arts;
        teasure.artsPrice = arts.price;

        itemQuantity = TreasureGenerator.rollDice(1);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_I,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt == 97 || diceInt == 98:

        gemQuantity = TreasureGenerator.rollMultipleDice(3, 6);

        gems = await TreasureGenerator.generateGems(
          gem_500,
          gemQuantity,
          500,
          6
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(1);

        teasure.itens = await TreasureGenerator.generateMagicItems(
          magic_I,
          itemQuantity
        );

        return res.status(200).json(teasure);

      case diceInt == 99 || diceInt == 100:

        gemQuantity = TreasureGenerator.rollMultipleDice(3, 6);

        gems = await TreasureGenerator.generateGems(
          gem_1000,
          gemQuantity,
          1000,
          8
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        itemQuantity = TreasureGenerator.rollDice(1);

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
