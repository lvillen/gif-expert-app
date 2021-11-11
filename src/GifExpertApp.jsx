import { useState, } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Lord of the Rings', 'Star Wars', 'Game of Thrones']);

    // const handleAdd = () => {
    //   setCategories([...categories, 'Riverdale']);
    // };

    return(
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategoriesProp={ setCategories }/>
            <hr />

            <ul>
              {categories.map( category => <li key={ category }> { category } </li>)}
            </ul>
        </>
    );
};
