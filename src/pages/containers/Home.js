import React, { Component } from "react";
import HomeLayout from "../components/HomeLayout";
import Categories from "../../categories/components/Categories";
import Related from "../components/Related";
import ModalContainer from "../../widgets/containers/ModalContainer";
import Modal from "../../widgets/components/Modal";
import labels from "../../../en.json";
import HandleError from "../../error/containers/HandleError";

class Home extends Component {
  state = {
    modalVisible: false
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

  render() {
    const {
      data: { categories }
    } = this.props;

    return (
      <HomeLayout>
        <Related />
        <HandleError message={labels.acciones.ERROR}>
          <Categories
            categories={categories}
            handleOpenModal={this.handleOpenModal}
          />
          {this.state.modalVisible && (
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <h1>{labels.modal.videoModal.TITULO}</h1>
                <p>{labels.modal.videoModal.MENSAJE}</p>
              </Modal>
            </ModalContainer>
          )}
        </HandleError>
      </HomeLayout>
    );
  }
}

export default Home;
