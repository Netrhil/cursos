import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories'
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'

class Home extends Component {
  // Esta forma de setear es de ecma7
  state = {
    modalVisible: false
  }

  handleOpenModalClick = () => {
    this.setState({
      modalVisible: true
    });
  }

  handleCloseModalClick = (evento) => {
    this.setState({
      modalVisible: false
    });
  }

  render() {
    return (
      <HandleError>
        <HomeLayout> 
          <Related />
          <VideoPlayer 
            autoplay
          />
          <Categories 
            categories={this.props.data.categories} 
            handleOpenModal={this.handleOpenModalClick} />

          {
            this.state.modalVisible &&
            <ModalContainer>
            <Modal
              handleClick={this.handleCloseModalClick}
            >
            <h1> Esto es un portal :D</h1>
            </Modal>
          </ModalContainer>
          }
        </HomeLayout>
      </HandleError>     
    )
  }
}

export default Home
