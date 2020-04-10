import React from "react";
import PropTypes from "prop-types";
import Media from "./Media";
import "./Playlist.css";

function Playlist(props){
  const {playlist, handleOpenModal} = props;

  return(
    <div className="Playlist">
      {playlist.map((item) => {
        return(
          <Media openModal={handleOpenModal} key={item.id} {...item}/>
        );
      })}
    </div>
  );
};

export default Playlist;
