const gem_50 = require("../../models/Gems/gems_50");
const gem_100 = require("../../models/Gems/gems_100");
const art_25 = require("../../models/ArtObjects/art_25");
const art_250 = require("../../models/ArtObjects/art_250");
const magic_A = require("../../models/MagicItems/magic_A");
const magic_B = require("../../models/MagicItems/magic_B");
const magic_C = require("../../models/MagicItems/magic_C");
const magic_F = require("../../models/MagicItems/magic_F");
const magic_G = require("../../models/MagicItems/magic_G");
const magic_H = require("../../models/MagicItems/magic_H");
const TreasureGenerator = require('../../helpers/TreasureGenerator');

class TreasurePileController5_10 {
  async roll(req, res) {

    const dice = req.params.dice;
    const diceInt = parseInt(dice, 10);

    const poValue = TreasureGenerator.rollMultipleDice(6, 6) * 100;
    const plValue = TreasureGenerator.rollMultipleDice(3, 6) * 10;

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

      case diceInt >= 1 && diceInt <= 4:
        return res.status(200).json(teasure);

      case diceInt >= 5 && diceInt <= 10:

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

      case diceInt >= 11 && diceInt <= 16:

        gemQuantity = TreasureGenerator.rollMultipleDice(3, 6);

        gems = await TreasureGenerator.generateGems(
          gem_50,
          gemQuantity,
          50,
          12
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        return res.status(200).json(teasure);

      case diceInt >= 17 && diceInt <= 22:

        gemQuantity = TreasureGenerator.rollMultipleDice(3, 6);

        gems = await TreasureGenerator.generateGems(
          gem_100,
          gemQuantity,
          100,
          10
        );

        teasure.gems = gems.gems;
        teasure.gemsPrice = gems.price;

        return res.status(200).json(teasure);

      case diceInt >= 23 && diceInt <= 28:

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

      case diceInt >= 29 && diceInt <= 32:

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


      default:
        return res.status(200).json(teasure);

    }

  }
}

module.exports = new TreasurePileController5_10();
