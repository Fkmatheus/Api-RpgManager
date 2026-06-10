const Gem10 = require("../../models/Gems/gems_10");
const Gem50 = require("../../models/Gems/gems_50");
const Gem100 = require("../../models/Gems/gems_100");
const Gem500 = require("../../models/Gems/gems_500");
const Gem1000 = require("../../models/Gems/gems_1000");
const Gem5000 = require("../../models/Gems/gems_5000");

const Art25 = require("../../models/ArtObjects/art_25");
const Art250 = require("../../models/ArtObjects/art_250");
const Art750 = require("../../models/ArtObjects/art_750");
const Art2500 = require("../../models/ArtObjects/art_2500");
const Art7500 = require("../../models/ArtObjects/art_7500");

const MagicItemA = require("../../models/MagicItems/magic_A");
const MagicItemB = require("../../models/MagicItems/magic_B");
const MagicItemC = require("../../models/MagicItems/magic_C");
const MagicItemD = require("../../models/MagicItems/magic_D");
const MagicItemE = require("../../models/MagicItems/magic_E");
const MagicItemF = require("../../models/MagicItems/magic_F");
const MagicItemG = require("../../models/MagicItems/magic_G");
const MagicItemH = require("../../models/MagicItems/magic_H");
const MagicItemI = require("../../models/MagicItems/magic_I");


class SearchAllController {
  async findAllGemByName(req, res) {
    const results = await Promise.all([
      Gem10.findAll(),
      Gem50.findAll(),
      Gem100.findAll(),
      Gem500.findAll(),
      Gem1000.findAll(),
      Gem5000.findAll(),
    ]);

    const allGems = results.flat();

    let name = req.params.name;

    const gem = allGems.find(
      item => item.title === name
    );

    if (!gem) {
      return res.status(404).json({
        error: "Gema não encontrada"
      });
    }

    return res.json(gem);


  }

  async findAllObjByName(req, res) {
    const results = await Promise.all([
      Art25.findAll(),
      Art250.findAll(),
      Art750.findAll(),
      Art2500.findAll(),
      Art7500.findAll(),
    ]);

    const allObj = results.flat();

    let name = req.params.name;

    const obj = allObj.find(
      item => item.title === name
    );

    if (!obj) {
      return res.status(404).json({
        error: "Arte não encontrada"
      });
    }

    return res.json(obj);
  }

  async findAllItensByName(req, res) {
    const results = await Promise.all([
      MagicItemA.findAll(),
      MagicItemB.findAll(),
      MagicItemC.findAll(),
      MagicItemD.findAll(),
      MagicItemE.findAll(),
      MagicItemF.findAll(),
      MagicItemG.findAll(),
      MagicItemH.findAll(),
      MagicItemI.findAll(),
    ]);

    const allItens = results.flat();

    let name = req.params.name;

    const item = allItens.find(
      item => item.title === name
    );

    if (!item) {
      return res.status(404).json({
        error: "Item não encontrado"
      });
    }

    return res.json(item);
  }
}

module.exports = new SearchAllController();