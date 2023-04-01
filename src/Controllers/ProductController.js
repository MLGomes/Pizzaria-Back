const ProductModel = require('../Models/ProductModel');

class ProductController {
    async create(req, res){

        const { name, price } = req.body;
        const userExists = await ProductModel.findOne({name});

        if (userExists) {
            return res.status(400).json({message : "Já existe uma Pizza cadastrada com o nome informado"});
        }

        if (!name || !price) {
            return res.status(400).json({message : "Preencha todos os campos!"})
        }

        const createdUser = await ProductModel.create(req.body);

        return res.status(200).json(createdUser);
    }

    async all(req, res){
        const listUsers = await ProductModel.find();

        return res.status(200).json(listUsers);
    }

    async show(req, res){
        try {
            const {id} = req.params;

            const userRef = await ProductModel.findById(id);
    
            if (!userRef) {
                return res.status(404).json({message : "Pizza não existe"});
            }
    
            return res.status(200).json(userRef);

        } catch (error) {
            return res.status(404).json({message : "Pizza não existe"});
        }

    }

    async update(req, res){
        try {
            const {id} = req.params;

            await ProductModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({message : "Pizza atualizada com Sucesso!"});

        } catch (error) {
            return res.status(404).json({message : "Dados não atualizados, verifique os dados a serem atualizados!"});
        }
    }

    async delete(req, res){
        try {

            const {id} = req.params;

            const userDeleteRef = await ProductModel.findByIdAndDelete(id);
            
            if (!userDeleteRef) {
                return res.status(404).json({message : "Pizza não existe"});
            }
    
            return res.status(200).json({message : "Pizza deletada com sucesso!"});

        } catch (error) {
            return res.status(404).json({message : "Erro ao deletar o arquivo"});
        }
    }
}

module.exports = new ProductController;