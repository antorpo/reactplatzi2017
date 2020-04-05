import React, { Component } from "react";
import HomeLayout from "../components/HomeLayout";
import Categories from "../../categories/components/Categories";
import Related from "../components/Related";
import ModalContainer from "../../widgets/containers/ModalContainer";
import Modal from "../../widgets/components/Modal";
import labels from "../../../en.json";

class Home extends Component {
  state = {
      modalVisible: false,
      handleError: false
  };

  handleCloseModal = () => {
    this.setState({
      modalVisible: false
    });
  };

  handleOpenModal = () => {
    this.setState({
        modalVisible: true
    });
  };

  // Nos ayuda a capturar errores.
  componentDidCatch(error,info){
    this.setState({
      handleError: true
    });
  };

  render() {
    const {
      data: { categories }
    } = this.props;

    if(this.state.handleError){
      return <h3 className="text-danger">{labels.acciones.ERROR}</h3>
    }
    return (
      <HomeLayout>
        <Related />
        <Categories categories={categories} handleOpenModal={this.handleOpenModal}/>
        {this.state.modalVisible && (
          <ModalContainer>
            <Modal handleClick={this.handleCloseModal}>
              <h1>{labels.modal.videoModal.TITULO}</h1>
              <p>{labels.modal.videoModal.MENSAJE}</p>
            </Modal>
          </ModalContainer>
        )}
      </HomeLayout>
    );
  }
}

export default Home;
