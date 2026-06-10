const gems_1000 = require("../../models/Gems/gems_1000");

// gems_1000.sync({ force: false });

class Gems1000Controller {

	async index(req, res) {

		const gems = await gems_1000.findAll();

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

		const gem = await gems_1000.findByPk(id);

		if (gem == undefined) {
			res.sendStatus(404);
		} else {
			res.status(200);
			res.json(gem);
		}
	}

	async roll(req, res) {
		const dice = req.params.dice;

    const gem = await gems_1000.findOne({
        where: {
            dice: dice
        }
    });

    if (!gem) {
        return res.sendStatus(404);
    }

    return res.status(200).json(gem);
	}

	async searchByName(req, res) {

		const name = req.params.name;

		const gem = await gems_1000.findOne({
			where: {
				title: name
			}
		});

		if (!gem) {
			return res.sendStatus(404);
		}

		return res.status(200).json(gem);
	}

	async create(req, res) {
		const { title, dice, description } = req.body;

		await gems_1000.create({
			title,
			dice,
			description
		});

		res.sendStatus(201);
	}

	async createMany(req, res) {

		const gems = req.body;

		await gems_1000.bulkCreate(gems);

		res.sendStatus(201);
	}
}

module.exports = new Gems1000Controller();