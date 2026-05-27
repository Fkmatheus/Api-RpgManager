const gems_500 = require("../../models/Gems/gems_500");

gems_500.sync({ force: false });

class Gems500Controller {

	async index(req, res) {

		const gems = await gems_500.findAll();

		res.status(200);
		res.json(gems);

	}

	async showById(req, res) {

		let id = req.params.id;

		if (isNaN(id)) {
			res.sendStatus(400);
			return;
		}

		id = parseInt(id);

		const gem = await gems_500.findByPk(id);

		if (gem == undefined) {
			res.sendStatus(404);
		} else {
			res.status(200);
			res.json(gem);
		}
	}

	async roll(req, res) {

		let dice = req.params.dice;

		const gem = await gems_500.findByPk(dice);

		if (gem == undefined) {
			res.sendStatus(404);
		} else {
			res.status(200);
			res.json(gem);
		}
	}

	async create(req, res) {
		const { title, dice } = req.body;

		await gems_500.create({
			title,
			dice,
			description
		});

		res.sendStatus(201);
	}

	async createMany(req, res) {

		const gems = req.body;

		await gems_500.bulkCreate(gems);

		res.sendStatus(201);
	}
}

module.exports = new Gems500Controller();