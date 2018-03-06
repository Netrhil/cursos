import React from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends React.Component {
     constructor(props) {
       super(props)
       this.state = {
        autor: props.autor
      }
     //   this.handleClick = this.handleClick.bind(this);
     }
    handleClick = (event) => {
        // console.log(this.props.image)
        this.setState({
            autor: 'Ricardo Celis',
        })
    }
    render() {
        const styles = {
            container: {
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img
                        src={this.props.imagen}
                        alt=""
                        width={260}
                        height={160}
                        className="Media-image"
                    />
                    <h3 className="Media-title">{this.props.titulo}</h3>
                    <p className="Media-author">{this.state.autor}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    imagen: PropTypes.string,
    titulo: PropTypes.string.isRequired,
    autor: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;
