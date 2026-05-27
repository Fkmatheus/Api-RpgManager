const express = require("express");

const router = express.Router();

const Gems10Controller = require("../controllers/Gems/Gems10Controller");

// Gems_10 Controller
router.get("/gems10", Gems10Controller.index);
router.get("/gems10/:id", Gems10Controller.showById);
router.post("/gem10", Gems10Controller.create);
router.post("/gems10", Gems10Controller.createMany);


module.exports = router;