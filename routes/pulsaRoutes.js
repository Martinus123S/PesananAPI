module.exports = (app)=>{
    const pulsaController = require('../controller/pulsaController');
    app.route("/pulsa")
    .get(pulsaController.getPulsa)
    .post(pulsaController.createPulsa);

    app.route("/pulsa/:pulsaId")
    .put(pulsaController.updatePulsa);
}