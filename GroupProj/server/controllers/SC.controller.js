const Team = require("../models/SC.model");

const AddTeam = (req, res) => {
    Team.create(req.body)

    .then((newTeam) => {
        res.json({newTeam});
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
}

const getAllTeams = (req, res) => {
    Team.find()

    .then(getAll => {
        console.log(getAll);
        res.json(getAll);
    })

    .catch((err) => res.json(console.log(err)))
}

const getById = (req, res) => {
    Team.findOne({_id: req.params.id})

    .then((teamById) => {
        console.log(teamById);

        res.json(teamById);
    })

    .catch((err) => console.log( err))
}


const deleteTeam = (req, res) => {
    Team.deleteOne({_id: req.params.id})

    .then((results) => {
        console.log(results)
        res.json(results)
    })

    .catch((err) => console.log(err))
    
}

const updateTeam = (req, res) => {
    Team.findByIdAndUpdate({_id: req.params.id}, req.body, {
        new: true, runValidators: true,
    })

    .then((updateTeam) => {
        console.log(updateTeam)
        res.json(updateTeam)
    })

    .catch((err) => console.log(err))

};



module.exports ={
    AddTeam,
    getAllTeams,
    getById,
    deleteTeam,
    updateTeam,
};