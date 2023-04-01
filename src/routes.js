const { Router } = require('express');
const ProductController = require('./Controllers/ProductController');

const routes = Router();

routes.get('/pizza', (req, res) => {
    return res.status(200).json({ message: "SERVIDOR OK" });
});

routes.post('/', ProductController.create);
routes.get('/list', ProductController.all);
routes.get('/:id', ProductController.show);
routes.put('/update/:id', ProductController.update);
routes.delete('/delete/:id', ProductController.delete);

module.exports = routes;