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


module.exports = router;