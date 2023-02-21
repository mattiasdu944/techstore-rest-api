import { categories } from "../database/categoriesDb.js";


export const getCategories = (req, res) => {
    const response = categories;

    return res.json(response);
};

export const getCategoriesById = (req, res) => {
    const id = req.params.id;
    const category = categories.find( category => category.id === Number(id));

    if( !category ){
        return res.status(400).json({ message: "Category not found"});
    }

    return res.json( category );
};