import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Lord of the Rings']);

    return(
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategoriesProp={ setCategories }/>
            <hr />

            <ul>
              {categories.map( category => (
                <GifGrid 
                  key={ category }
                  categoryProp={ category }
                />
              ))
              }
            </ul>
        </>
    );
};
