const gem_10 = require("../../models/Gems/gems_10");
const gem_50 = require("../../models/Gems/gems_50");
const art_25 = require("../../models/ArtObjects/art_25");

class TreasurePileController0_4 {
  async roll(req, res) {

    const dice = req.params.dice;
    const diceInt = parseInt(dice, 10);
    let teasure = {
      gems: [],
      arts: [],
      itens: []
    }

    switch (true) {

      case diceInt >= 1 && diceInt <= 6:
        return res.status(200).json(teasure);

      case diceInt >= 7 && diceInt <= 16:

        // Dados da pilha 2d6 gemas 10 po
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        let dadoSum = dado1 + dado2;

        for (let i = 1; i <= dadoSum; i++) {

          // Dado de gema 1d12 a tabela de gemas 10po
          let dadoGem = Math.floor(Math.random() * 12) + 1;
          dadoGem = dadoGem.toString();
          let gem = await gem_10.findOne({
            where: {
              dice: dadoGem
            }
          });

          if (gem) {
            teasure.gems.push(gem.title);
          }
        }

        return res.status(200).json(teasure);
    }


  }
}

module.exports = new TreasurePileController0_4();
