const pets = require("../controllers/pets.controller");


module.exports = (app) => {
    app.post('/api/pets', pets.create)
    app.get('/api/pets', pets.getAll)
    app.get('/api/pets/:_id', pets.getOne)
    app.delete('/api/pets/:_id', pets.delete)
    app.put('/api/pets/edit/:_id', pets.update)
}