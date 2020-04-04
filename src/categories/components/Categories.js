import React from "react";
import Category from "./Category";
import "./Categories.css";

function Categories(props){
    const { categories } = props;
    return(
        <div className="Categories">
            {categories.map((item) => {
                return(
                    <Category key={item.id} {...item}/>
                );
            })}
        </div>
    );
};

export default Categories;