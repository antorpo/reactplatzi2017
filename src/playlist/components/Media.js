import React, { PureComponent } from "react";
import  PropTypes from "prop-types";
import "./Media.css";


/* PureComponente:  
   Si se le actualizan las propiedades al componente
   este las gestiona por si mismo.
*/
class Media extends PureComponent {
  constructor(props){
    super(props);

    this.state = {
        title: props.title,
        author: props.author,
        cover: props.cover
    };

    // Enlazamos la funcion con mi clase (this).
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.setState({
        title: "Modificado",
        author: "Modificado 2"
    })
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
