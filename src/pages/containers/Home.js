import React, { Component } from "react";
import HomeLayout from "../components/HomeLayout";
import Categories from "../../categories/components/Categories";
import Related from "../components/Related";
import ModalContainer from "../../widgets/containers/ModalContainer";
import Modal from "../../widgets/components/Modal";
import labels from "../../../en.json";
import HandleError from "../../error/containers/HandleError";
import VideoPlayer from "../../player/containers/VideoPlayer";

class Home extends Component {
  state = {
    modalVisible: false,
    media: null
  };

  handleCloseModal = () => {
    this.setState({
      modalVisible: false,
    });
  };

  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media: media
    });
  };

  render() {
    const {
      data: { categories },
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
                <VideoPlayer 
                  autoplay 
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          )}
        </HandleError>
      </HomeLayout>
    );
  }
}

export default Home;
