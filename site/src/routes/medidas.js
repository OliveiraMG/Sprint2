var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/:tipo/:idSensor", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idSensor", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})



module.exports = router;