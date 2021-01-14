module.exports = (app)=>{
    const roomController = require("../controller/roomController");

    app.route("/room")
    .get(roomController.getRoom)
    .post(roomController.createRoom)

    app.route("/room/:roomId")
    .get(roomController.getOneRoom)
    .put(roomController.updateRoom)
    .delete(roomController.deleteRoom);
}