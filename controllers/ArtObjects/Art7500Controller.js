const art_7500 = require("../../models/ArtObjects/art_7500");

// art_7500.sync({ force: false });

class Art7500Controller {

	async index(req, res) {

		const arts = await art_7500.findAll();

		res.status(200);
		res.json(arts);

	}

	async showById(req, res) {

		let id = req.params.id;

		if (isNaN(id)) {
			res.sendStatus(400);
			return;
		}

		id = parseInt(id);

		const art = await art_7500.findByPk(id);

		if (art == undefined) {
			res.sendStatus(404);
		} else {
			res.status(200);
			res.json(art);
		}
	}

	async roll(req, res) {

		const dice = req.params.dice;

    const art = await art_7500.findOne({
        where: {
            dice: dice
        }
    });

    if (!art) {
        return res.sendStatus(404);
    }

    return res.status(200).json(art);
	}

	async create(req, res) {
		const { title, dice, description } = req.body;

		await art_7500.create({
			title,
			dice,
			description
		});

		res.sendStatus(201);
	}

	async createMany(req, res) {

		const arts = req.body;

		await art_7500.bulkCreate(arts);

		res.sendStatus(201);
	}
}

module.exports = new Art7500Controller();