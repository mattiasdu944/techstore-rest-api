import { products } from "../database/productsDb.js";

export const getProducts = (req, res) => {
    const response = products

    //Add products by category
    const { category } = req.query;

    if( category ){
        const productsCategory = products.filter( product => product.category === category);
        return res.json( productsCategory );
    }

    return res.json(response);
};

export const getProductById = (req, res) => {
    const id = req.params.id;
    const product = products.find( product => product.id === Number(id));

    if( !product ){
        return res.status(500).json({ message: "Product not found"});
    }

    return res.json( product );
};