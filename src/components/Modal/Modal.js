import React, { Component } from 'react';

import './Modal.scss';

import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.show !== nextProps.show) 
        || (this.props.children !== nextProps.children);
    }

    render() {
        return (
            <>
                <Backdrop show={this.props.show} clicked={this.props.modalClose}/>
                <div 
                    className="modal"
                    style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-1000vh)'}}
                >
                    <div className="modal__close-button" onClick={this.props.modalClose}>&#10006;</div>
                    <h2 className="modal__header">5 day forecast</h2>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Modal;