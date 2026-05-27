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


module.exports = router;