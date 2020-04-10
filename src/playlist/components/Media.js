import React, { PureComponent } from "react";
import  PropTypes from "prop-types";
import "./Media.css";


/* PureComponente:  
   Al usar este tipo de componentes no necesitamos implementar
   el metodo shouldComponentUpdate() para evitar que se haga 
   render cada vez que cambiamos una propiedad, PureComponent
   lo hace por default.
*/
class Media extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
        title: props.title,
        author: props.author,
        cover: props.cover
    };

  }

  handleClick = () => {
    this.props.openModal(this.props);
  };

  render() {
    const {title, author, cover} = this.state;
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            className="Media-image"
            src={cover}
            alt="Imagen cover"
            width={260}
            height={160}
          />

          <h3 className="Media-title">{title}</h3>
          <p className="Media-author">{author}</p>
        </div>
      </div>
    );
  }
}

// Validamos el tipo de los props:
Media.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["video", "audio"]).isRequired
};

export default Media;
