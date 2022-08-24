const TeamController = require ("../controllers/SC.controller");

module.exports = (app) => {
    app.post("/api/teams", TeamController.AddTeam)
    app.get("/api/teams", TeamController.getAllTeams)
    app.get("/api/teams/:id", TeamController.getById)
    app.put("/api/teams/:id", TeamController.updateTeam)
    app.delete("/api/teams/:id", TeamController.deleteTeam)

};