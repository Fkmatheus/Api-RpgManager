const magicSpells = require("../../models/MagicSpells/magicSpells")

magicSpells.sync({ force: false });

class MagicSpellsController {
  async index(req, res) {

    const spells = await magicSpells.findAll({
      order: [
        ['nivel', 'ASC'],
        ['title', 'ASC']
      ]
    });

    res.status(200);
    res.json(spells);

  }

  async create(req, res) {
    console.log("ENTROU AQUI");
    console.log("ENTROU AQUI");
    console.log("ENTROU AQUI");
    console.log("ENTROU AQUI");
    console.log("ENTROU AQUI");
    console.log("ENTROU AQUI");
    console.log("ENTROU AQUI");
    console.log("ENTROU AQUI");
    console.log("ENTROU AQUI");
    console.log("HEADERS:", req.headers["content-type"]);
    console.log("RAW BODY:", req.body);
    const { title,
      nivel,
      description,
      school,
      timeConjuration,
      alcance,
      componentes,
      duration,
      ritual,
      bard,
      wizard,
      cleric,
      druid,
      sorcerer,
      mage,
      paladin,
      ranger } = req.body;

    await magicSpells.create({
      title,
      nivel,
      description,
      school,
      timeConjuration,
      alcance,
      componentes,
      duration,
      ritual,
      bard,
      wizard,
      cleric,
      druid,
      sorcerer,
      mage,
      paladin,
      ranger
    });

    res.sendStatus(201);
  }
}

module.exports = new MagicSpellsController();