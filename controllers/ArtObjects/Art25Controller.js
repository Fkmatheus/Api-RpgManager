const art_25 = require("../../models/ArtObjects/art_25");

art_25.sync({ force: false });

class Art25Controller {

	async index(req, res) {

		const arts = await art_25.findAll();

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

		const art = await art_25.findByPk(id);

		if (art == undefined) {
			res.sendStatus(404);
		} else {
			res.status(200);
			res.json(art);
		}
	}

	async roll(req, res) {

		let dice = req.params.dice;

		const art = await art_25.findByPk(dice);

		if (art == undefined) {
			res.sendStatus(404);
		} else {
			res.status(200);
			res.json(art);
		}
	}

	async create(req, res) {
		const { title, dice, description } = req.body;

		await art_25.create({
			title,
			dice,
			description
		});

		res.sendStatus(201);
	}

	async createMany(req, res) {

		const arts = req.body;

		await art_25.bulkCreate(arts);

		res.sendStatus(201);
	}
}

module.exports = new Art25Controller();