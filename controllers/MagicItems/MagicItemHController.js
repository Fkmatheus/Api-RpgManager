const magic_H = require("../../models/MagicItems/magic_H");

magic_H.sync({ force: false }); 

class MagicItemHController {

	async index(req, res) {

		const magics = await magic_H.findAll();

		res.status(200);
		res.json(magics);

	}

	async showById(req, res) {

		let id = req.params.id;

		if (isNaN(id)) {
			res.sendStatus(400);
			return;
		}

		id = parseInt(id);

		const magic = await magic_H.findByPk(id);

		if (magic == undefined) {
			res.sendStatus(404);
		} else {
			res.status(200);
			res.json(magic);
		}
	}

	async roll(req, res) {

		const dice = req.params.dice;

    const magic = await magic_H.findOne({
        where: {
            dice: dice
        }
    });

    if (!magic) {
        return res.sendStatus(404);
    }

    return res.status(200).json(magic);
	}

	async create(req, res) {
		const { title, dice, description } = req.body;

		await magic_H.create({
			title,
			dice,
			description
		});

		res.sendStatus(201);
	}

	async createMany(req, res) {

		const magics = req.body;

		await magic_H.bulkCreate(magics);

		res.sendStatus(201);
	}
}

module.exports = new MagicItemHController();