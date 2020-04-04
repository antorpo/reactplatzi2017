import React from "react";
import Media from "./Media";
import "./Playlist.css";

function Category(props) {
  const { category } = props;

  return (
    <div className="Playlist">
      <p>{category.description}</p>
      <h1>{category.title}</h1>

      {category.playlist.map(item => {
        return (
          <Media
            key={item.id}
            {...item}
          />
        );
      })}
    </div>
  );
}

export default Category;
