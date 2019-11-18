import React, { Component } from 'react';
import Image from './Image';
import ImageSearch from './ImageSearch';

export default class Imagelist extends Component {
    render() {

        const {
            data,
            handleDetals,
            value,
            handleSubmit,
            handleChange,
            error,
            handleSort,
            handleSortTop,
            handleSortTime,
            handleSortRising,
            search
        } = this.props;

        return (
            <React.Fragment>
                <ImageSearch 
                value={value} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                handleSort={handleSort}
                handleSortTop={handleSortTop}
                handleSortTime={handleSortTime}
                handleSortRising={handleSortRising}
                 />
                <div className="container">
                    <div className="row">
                        <div className="col-10 col-md-6 text-center text-uppercase mb-3">
                            <div className="first-head-text">
                            </div>
                        </div>
                    </div>
                        {/* {error ? <h1 className="danger">{error}</h1> : data.map(dat => {
                            return (
                                <Image 
                                    key={dat.id} 
                                    dat={dat}
                                    handleDetals={() => handleDetals(0, dat.id)}
                                    search={search}
                            />
                            );
                        })} */}
                        {error.length===0 ? <h1 className="danger"></h1> : <div className="error-msg">Wrong search keyword</div>}
                        {data.map(dat => {
                            return (
                                <Image 
                                    key={dat.id} 
                                    dat={dat}
                                    handleDetals={() => handleDetals(0, dat.id)}
                                    search={search}
                            />
                            );
                        })}
                </div>

            </React.Fragment>
        )
    }
}
