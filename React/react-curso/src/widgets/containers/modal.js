import React, { Component } from 'React';
import { createPortal } from 'React-dom';

class ModalContainer extends Component {
    render() {
        return createPortal(
            this.props.children,
            document.getElementById('modal-container') )
    }
}

export default ModalContainer;  