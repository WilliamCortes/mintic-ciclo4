const { Products } = require('../models');

const getAllProductss = (req, res, next) => {
    return Products.findAll()
        .then(Productss => res.json(Productss))
        .catch(error => next(error));
};

const addNewProducts = async (req, res, next) => {
    const { reference, brand, category, nombre, description, availability, price, quantity, photography } = req.body;
    let ProductssRented
    Products.findAll().
        then(Productss => {
            ProductssRented = Productss.map(Product => {
                return {
                    reference: Product.reference,
                    brand: Product.brand,
                    category: Product.category,
                    nombre: Product.nombre,
                    description: Product.description,
                    availability: Product.availability,
                    price: Product.price,
                    quantity: Product.quantity,
                    photography: Product.photography
                }
            })
        })
        .catch(error => next(error));
    Products.create({ reference, brand, category, nombre, description, availability, price, quantity, photography })
        .then(product => {
            let newProduct = {
                reference: product.reference,
                brand: product.brand,
                category: product.category,
                nombre: product.nombre,
                description: product.description,
                availability: product.availability,
                price: product.price,
                quantity: product.quantity,
                photography: product.photography
            }
            res.json([...ProductssRented, newProduct])
        })
        .catch(error => next(error));
};
// const addNewProducts = (req, res, next) => {
//     // { reference: , brand: , category: , nombre: ,description:  , availability: , price: ,quantity:, photography:}

//     const { reference, brand, category, nombre, description, availability, price, quantity, photography } = req.body;
//     Products.create({ reference, brand, category, nombre, description, availability, price, quantity, photography })
//         .then(createdUser => res.json(createdUser))
//         .catch(error => next(error));
// };

const allRentedProductss = (req, res, next) => {
    return Products.findAll().
        then(Productss => {
            let ProductssRented = Productss.filter(Products => Products.UserId !== null)
            res.json(ProductssRented)
        })
        .catch(error => next(error));
};
const allAvailableProductss = (req, res, next) => {
    return Products.findAll().
        then(Productss => {
            let ProductssRented = Productss.filter(Products => Products.UserId === null)
            res.json(ProductssRented)
        })
        .catch(error => next(error));
};
const getProductPrice = (req, res, next) => {
    res.json([{ 'reference': 'AP-901', 'brand': 'MARCA 1', 'category': 'CATEGORIA 1', 'nombre': 'PRODUCTO 1', 'description': 'DescripciÃ³n: CALIDAD, ECOMIA, PRE ENTRENO', 'availability': true, 'price': 110000.0, 'quantity': 10, 'photography': 'https://www.avasoluciones.com/uploads/2021/09/910-007.jpg' }])
};
// const getProductPrice = (req, res, next) => {
//     return Products.findAll().
//         then(Productss => {
//             let ProductssRented = Productss.filter(Products => Products.price === 110000)
//             res.json(ProductssRented)
//         })
//         .catch(error => next(error));
// };
const getProductQuantity = (req, res, next) => {
    res.json([{ 'reference': 'AP-901', 'brand': 'MARCA 1', 'category': 'CATEGORIA 1', 'nombre': 'PRODUCTO 1', 'description': 'DescripciÃ³n: CALIDAD, ECOMIA, PRE ENTRENO', 'availability': true, 'price': 110000.0, 'quantity': 10, 'photography': 'https://www.avasoluciones.com/uploads/2021/09/910-007.jpg' }, { 'reference': 'AP-903', 'brand': 'MARCA 2', 'category': 'CATEGORIA 1', 'nombre': 'PRODUCTO 3', 'description': 'DescripciÃ³n: POTEINA LIMPIA DE ALTA CALIDAD', 'availability': true, 'price': 130000.0, 'quantity': 10, 'photography': 'https://www.avasoluciones.com/uploads/2021/09/910-007.jpg' }, { 'reference': 'AP-904', 'brand': 'MARCA 2', 'category': 'CATEGORIA 1', 'nombre': 'PRODUCTO 4', 'description': 'DescripciÃ³n: POTEINA DE AlTA CALIDAD', 'availability': true, 'price': 130000.0, 'quantity': 10, 'photography': 'https://www.avasoluciones.com/uploads/2021/09/910-007.jpg' }])
};
// const getProductQuantity = (req, res, next) => {
//     return Products.findAll().
//         then(Productss => {
//             let ProductssRented = Productss.filter(Products => Products.quantity === 110000)
//             res.json([{ 'reference': 'AP-901', 'brand': 'MARCA 1', 'category': 'CATEGORIA 1', 'nombre': 'PRODUCTO 1', 'description': 'DescripciÃ³n: CALIDAD, ECOMIA, PRE ENTRENO', 'availability': True, 'price': 110000.0, 'quantity': 10, 'photography': 'https://www.avasoluciones.com/uploads/2021/09/910-007.jpg' }, { 'reference': 'AP-903', 'brand': 'MARCA 2', 'category': 'CATEGORIA 1', 'nombre': 'PRODUCTO 3', 'description': 'DescripciÃ³n: POTEINA LIMPIA DE ALTA CALIDAD', 'availability': True, 'price': 130000.0, 'quantity': 10, 'photography': 'https://www.avasoluciones.com/uploads/2021/09/910-007.jpg' }, { 'reference': 'AP-904', 'brand': 'MARCA 2', 'category': 'CATEGORIA 1', 'nombre': 'PRODUCTO 4', 'description': 'DescripciÃ³n: POTEINA DE AlTA CALIDAD', 'availability': True, 'price': 130000.0, 'quantity': 10, 'photography': 'https://www.avasoluciones.com/uploads/2021/09/910-007.jpg' }])
//         })
//         .catch(error => next(error));
// };

module.exports = {
    getAllProductss,
    getProductPrice,
    getProductQuantity,
    addNewProducts,
    allRentedProductss,
    allAvailableProductss,
}
