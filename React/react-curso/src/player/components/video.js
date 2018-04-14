import React, { Component } from 'react';
import './video.css'

class Video extends Component {
    togglePlay() {
        if(this.props.pause) {
            // Elemento Referenciado al HTML
            this.video.play();
        } else {
            this.video.pause();
        }

    }

    // Recibe como parametro las proximas propiededes
    componentWillReceiveProps(nextProps) {
        if(nextProps.pause != this.props.pause) {
            this.togglePlay();
        }

    }

    setRef = element => {
        this.video = element;
    }
    
    
    render() {
        const {
            handleLoadedMetadata
        } = this.props

        return (
            <div>
                <video
                    autoPlay={this.props.autoplay}
                    src={this.props.src}
                    ref={this.setRef}
                    onLoadedMetadata={this.props.handleLoadedMetadata}
                  
                />
            </div>
        )
    }
    
}

export default Video;

