const magic_F = require("../../models/MagicItems/magic_F");

// magic_F.sync({ force: false }); 

class MagicItemFController {

	async index(req, res) {

		const magics = await magic_F.findAll();

		res.status(200);
		res.json(magics);

	}

	async indexUnique(req, res) {
		const magics = await magic_F.findAll({
			order: [["id", "ASC"]],
		});

		const uniqueMagics = [
			...new Map(
				magics.map(item => [item.title, item])
			).values()
		];

		return res.status(200).json(uniqueMagics);
	}

	async showById(req, res) {

		let id = req.params.id;

		if (isNaN(id)) {
			res.sendStatus(400);
			return;
		}

		id = parseInt(id);

		const magic = await magic_F.findByPk(id);

		if (magic == undefined) {
			res.sendStatus(404);
		} else {
			res.status(200);
			res.json(magic);
		}
	}

	async roll(req, res) {

		const dice = req.params.dice;

    const magic = await magic_F.findOne({
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

		await magic_F.create({
			title,
			dice,
			description
		});

		res.sendStatus(201);
	}

	async createMany(req, res) {

		const magics = req.body;

		await magic_F.bulkCreate(magics);

		res.sendStatus(201);
	}
}

module.exports = new MagicItemFController();