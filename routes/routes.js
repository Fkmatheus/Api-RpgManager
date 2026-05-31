const express = require("express");

const router = express.Router();

// Gems_10 Routes
const Gems10Controller = require("../controllers/Gems/Gems10Controller");
router.get("/gems10", Gems10Controller.index);
router.get("/gems10/:id", Gems10Controller.showById);
router.get("/gems10/roll/:dice", Gems10Controller.roll);
router.post("/gem10", Gems10Controller.create);
router.post("/gems10", Gems10Controller.createMany);

// Gems_50 Routes
const Gems50Controller = require("../controllers/Gems/Gems50Controller");
router.get("/gems50", Gems50Controller.index);
router.get("/gems50/:id", Gems50Controller.showById);
router.get("/gems50/roll/:dice", Gems50Controller.roll);
router.post("/gem50", Gems50Controller.create);
router.post("/gems50", Gems50Controller.createMany);

// Gems_100 Routes
const Gems100Controller = require("../controllers/Gems/Gems100Controller");
router.get("/gems100", Gems100Controller.index);
router.get("/gems100/:id", Gems100Controller.showById);
router.get("/gems100/roll/:dice", Gems100Controller.roll);
router.post("/gem100", Gems100Controller.create);
router.post("/gems100", Gems100Controller.createMany);

// Gems_500 Routes
const Gems500Controller = require("../controllers/Gems/Gems500Controller");
router.get("/gems500", Gems500Controller.index);
router.get("/gems500/:id", Gems500Controller.showById);
router.get("/gems500/roll/:dice", Gems500Controller.roll);
router.post("/gem500", Gems500Controller.create);
router.post("/gems500", Gems500Controller.createMany);

// Gems_1000 Routes
const Gems1000Controller = require("../controllers/Gems/Gems1000Controller");
router.get("/gems1000", Gems1000Controller.index);
router.get("/gems1000/:id", Gems1000Controller.showById);
router.get("/gems1000/roll/:dice", Gems1000Controller.roll);
router.post("/gem1000", Gems1000Controller.create);
router.post("/gems1000", Gems1000Controller.createMany);

// Gems_5000 Routes
const Gems5000Controller = require("../controllers/Gems/Gems5000Controller");
router.get("/gems5000", Gems5000Controller.index);
router.get("/gems5000/:id", Gems5000Controller.showById);
router.get("/gems5000/roll/:dice", Gems5000Controller.roll);
router.post("/gem5000", Gems5000Controller.create);
router.post("/gems5000", Gems5000Controller.createMany);

// Art_25 Routes
const Art25Controller = require("../controllers/ArtObjects/Art25Controller");
router.get("/art25", Art25Controller.index);
router.get("/art25/:id", Art25Controller.showById);
router.get("/art25/roll/:dice", Art25Controller.roll);
router.post("/art25", Art25Controller.create);
router.post("/arts25", Art25Controller.createMany);

// Art_250 Routes
const Art250Controller = require("../controllers/ArtObjects/Art250Controller");
router.get("/art250", Art250Controller.index);
router.get("/art250/:id", Art250Controller.showById);
router.get("/art250/roll/:dice", Art250Controller.roll);
router.post("/art250", Art250Controller.create);
router.post("/arts250", Art250Controller.createMany);

// Art_750 Routes
const Art750Controller = require("../controllers/ArtObjects/Art750Controller");
router.get("/art750", Art750Controller.index);
router.get("/art750/:id", Art750Controller.showById);
router.get("/art750/roll/:dice", Art750Controller.roll);
router.post("/art750", Art750Controller.create);
router.post("/arts750", Art750Controller.createMany);

// Art_2500 Routes
const Art2500Controller = require("../controllers/ArtObjects/Art2500Controller");
router.get("/art2500", Art2500Controller.index);
router.get("/art2500/:id", Art2500Controller.showById);
router.get("/art2500/roll/:dice", Art2500Controller.roll);
router.post("/art2500", Art2500Controller.create);
router.post("/arts2500", Art2500Controller.createMany);

// Art_7500 Routes
const Art7500Controller = require("../controllers/ArtObjects/Art7500Controller");
router.get("/art7500", Art7500Controller.index);
router.get("/art7500/:id", Art7500Controller.showById);
router.get("/art7500/roll/:dice", Art7500Controller.roll);
router.post("/art7500", Art7500Controller.create);
router.post("/arts7500", Art7500Controller.createMany);

// Magic Item A Routes
const MagicItemAController = require("../controllers/MagicItems/MagicItemAController");
router.get("/magicA", MagicItemAController.index);
router.get("/magicA/:id", MagicItemAController.showById);
router.get("/magicA/roll/:dice", MagicItemAController.roll);
router.post("/magicA", MagicItemAController.create);
router.post("/magicAs", MagicItemAController.createMany);

// Magic Item B Routes
const MagicItemBController = require("../controllers/MagicItems/MagicItemBController");
router.get("/magicB", MagicItemBController.index);
router.get("/magicB/:id", MagicItemBController.showById);
router.get("/magicB/roll/:dice", MagicItemBController.roll);
router.post("/magicB", MagicItemBController.create);
router.post("/magicBs", MagicItemBController.createMany);

// Magic Item C Routes
const MagicItemCController = require("../controllers/MagicItems/MagicItemCController");
router.get("/magicC", MagicItemCController.index);
router.get("/magicC/:id", MagicItemCController.showById);
router.get("/magicC/roll/:dice", MagicItemCController.roll);
router.post("/magicC", MagicItemCController.create);
router.post("/magicCs", MagicItemCController.createMany);

// Magic Item D Routes
const MagicItemDController = require("../controllers/MagicItems/MagicItemDController");
router.get("/magicD", MagicItemDController.index);
router.get("/magicD/:id", MagicItemDController.showById);
router.get("/magicD/roll/:dice", MagicItemDController.roll);
router.post("/magicD", MagicItemDController.create);
router.post("/magicDs", MagicItemDController.createMany);

// Magic Item E Routes
const MagicItemEController = require("../controllers/MagicItems/MagicItemEController");
router.get("/magicE", MagicItemEController.index);
router.get("/magicE/:id", MagicItemEController.showById);
router.get("/magicE/roll/:dice", MagicItemEController.roll);
router.post("/magicE", MagicItemEController.create);
router.post("/magicEs", MagicItemEController.createMany);

// Magic Item F Routes
const MagicItemFController = require("../controllers/MagicItems/MagicItemFController");
router.get("/magicF", MagicItemFController.index);
router.get("/magicF/:id", MagicItemFController.showById);
router.get("/magicF/roll/:dice", MagicItemFController.roll);
router.post("/magicF", MagicItemFController.create);
router.post("/magicFs", MagicItemFController.createMany);

// Magic Item G Routes
const MagicItemGController = require("../controllers/MagicItems/MagicItemGController");
router.get("/magicG", MagicItemGController.index);
router.get("/magicG/:id", MagicItemGController.showById);
router.get("/magicG/roll/:dice", MagicItemGController.roll);
router.post("/magicG", MagicItemGController.create);
router.post("/magicGs", MagicItemGController.createMany);

// Magic Item H Routes
const MagicItemHController = require("../controllers/MagicItems/MagicItemHController");
router.get("/magicH", MagicItemHController.index);
router.get("/magicH/:id", MagicItemHController.showById);
router.get("/magicH/roll/:dice", MagicItemHController.roll);
router.post("/magicH", MagicItemHController.create);
router.post("/magicHs", MagicItemHController.createMany);


module.exports = router;