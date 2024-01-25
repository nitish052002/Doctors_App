const { getBestDoctorController,getDoctorListController}= require("../controller/doctor.controller");
const router = require("express").Router();
router.get("/doctors/list",getDoctorListController)
router.get("/doctors", getBestDoctorController);

module.exports = router;
