import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({ defaultCategories = [] }) => {
    const [categories, setCategories] = useState( defaultCategories );

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
