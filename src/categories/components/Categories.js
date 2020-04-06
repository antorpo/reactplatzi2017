import React from "react";
import Category from "./Category";
import SearchContainer from "../../widgets/containers/SearchContainer"; 
import "./Categories.css";

function Categories(props){
    const { categories, handleOpenModal} = props;
    return(
        <div className="Categories">
            <SearchContainer/>
            {categories.map((item) => {
                return(
                    <Category handleOpenModal={handleOpenModal} key={item.id} {...item}/>
                );
            })}
        </div>
    );
};

export default Categories;