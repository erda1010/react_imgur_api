import React, { Component } from 'react';

export default class Image extends Component {

    render() {
        const {
            images = [],
        } = this.props.dat;

        const { handleDetals } = this.props;

        return (
            <React.Fragment>
                    {images.map(el => {
                        if (el.link.match(/\.(jpg|png|gif)/g)) {
                            return (
                                <div className="img_card" onClick={handleDetals}>
                                    <img src={el.link} alt="imgurphoto" />
                                    <div className="text-card">
                                        <h6>{el.description}</h6>
                                    </div>
                                    <button type="button" className="btn btn-primary text-capitalize" onClick={handleDetals}>
                                        More details</button>
                                </div>)
                        } else {
                            return null
                        }
                    })}

            </React.Fragment>
        )
    }
}


