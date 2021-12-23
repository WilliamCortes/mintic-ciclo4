const { User, Products } = require('../models');


const getAllUsers = (req, res, next) => {
    return User.findAll({
        include: Products,
    }).then(users => res.json(users))
        .catch(error => next(error));
};

const createNewUser = (req, res, next) => {
    const { name } = req.body;
    User.create({ name })
        .then(createdUser => res.json(createdUser))
        .catch(error => next(error));
};

const getUserById = (req, res, next) => {
    const { id } = req.params;
    return User.findByPk(id, { include: Products, })
        .then(user => res.json(user))
        .catch(error => next(error));
};

const addProductsToUser = async (req, res, next) => {
    try {
        const { userId, ProductsId } = req.params;
        let Products = await Products.findByPk(ProductsId);
        if (Products.UserId) {
            let userId = Products.UserId;
            let currentUser = await User.findByPk(userId);
            return res.send(`Este libro está prestado a: ${currentUser.name}`);
        }
        let user = await User.findByPk(userId, {});
        let result = await user.addProducts(Products);
        res.send(`Prestamo exitoso a: ${result.name}`);
    } catch (error) {
        next(error);
    }
};

const removeProductsToUser = async (req, res, next) => {
    try {
        const { userId, ProductsId } = req.params;
        let Products = await Products.findByPk(ProductsId);
        let user = await User.findByPk(userId, {
            include: Products,
        });
        let validateProducts = user.Productss.filter(Products => Products.id == ProductsId);
        if (!validateProducts.length) {
            res.send('Lo siento no coinciden los datos');
        } else {
            let Productss = user.Productss.filter(Products => Products.id != ProductsId);
            let resultProducts = await Products.update({ ...Products, UserId: null }, {});
            let resultUser = await user.update({ ...user, Productss: Productss }, {});
            res.send(`Devolución exitosa del libro: ${resultProducts.name} Por: ${resultUser.name} `);
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllUsers,
    createNewUser,
    getUserById,
    addProductsToUser,
    removeProductsToUser,
}