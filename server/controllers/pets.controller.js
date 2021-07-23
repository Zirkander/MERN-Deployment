const Pets = require("../models/pets.model");

module.exports = {
    create: function (req, res) {
        console.log("create method executed");

        Pets.create(req.body)
            .then((pets) => {
                res.json(pets);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    getAll(req, res) {
        console.log("getAll method executed");

        Pets.find({}, null, { sort: { type: 1 } })
            .then((pets) => {
                res.json(pets);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    getOne(req, res) {
        console.log("getOne method executed", "url params", req.params);

        Pets.findById(req.params)
            .then((pets) => {
                res.json(pets);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    delete(req, res) {
        console.log("Delete method executed", "url params", req.params);

        Pets.findByIdAndDelete(req.params)
            .then((pets) => {
                res.json(pets);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    update(req, res) {
        console.log("update method executed", "url params: ", req.params);

        Pets.findByIdAndUpdate(req.params, req.body)
            .then((pets) => {
                res.json(pets);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
};