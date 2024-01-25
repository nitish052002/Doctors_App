const getBestDoctorController = require("../controller/doctor.controller");
const router = require("express").Router();
router.get("/doctors", getBestDoctorController);

module.exports = router;
