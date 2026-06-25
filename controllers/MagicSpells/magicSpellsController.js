const { Op } = require("sequelize");

const magicSpells = require("../../models/MagicSpells/magicSpells")

magicSpells.sync({ force: false });

class MagicSpellsController {
  async index(req, res) {

    const { title, nivel, school, class: classFilter } = req.query;

    const where = {};

    if (title) {
      where.title = {
        [Op.like]: `%${title}%`
      };
    }

    if (nivel) {
      where.nivel = nivel;
    }

    if (school) {
      where.school = school;
    }

    if (classFilter) {
      where[classFilter] = true;
    }

    const spells = await magicSpells.findAll({
      where,
      order: [
        ['nivel', 'ASC'],
        ['title', 'ASC']
      ]
    });

    return res.status(200).json(spells);

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