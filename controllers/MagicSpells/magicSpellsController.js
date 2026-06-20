const magicSpells = require("../../models/MagicSpells/magicSpells")

magicSpells.sync({ force: false });

class MagicSpellsController {
  async index(req, res) {

    const spells = await magicSpells.findAll();

    res.status(200);
    res.json(spells);

  }

  async create(req, res) {
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