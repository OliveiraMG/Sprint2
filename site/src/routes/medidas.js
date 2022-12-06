var express = require("express");
var router = express.Router();
var medidaController = require("../controllers/medidaController");

router.get("/metricas", function (req, res) {
    medidaController.metricas(req, res);
})

router.get("/tempo-real/:idSensor", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/:tipo/:idSensor", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

module.exports = router;