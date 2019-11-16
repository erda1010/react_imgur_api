import React, { Component } from 'react';

export default class ImageSearch extends Component {
    render() {
        const{value,handleSubmit,handleChange}=this.props
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>Search one of categories:
                                <span className="strong-text">hot</span>
                                <span className="strong-text">user</span>
                                <span className="strong-text">topic</span>
                            </h1>
                            <form className="form-name" onSubmit={handleSubmit}>
                                <label htmlFor="search">
                                </label>
                                <div className="input-group">
                                    <input type="text" name="search" 
                                    placeholder="search for photos" 
                                    className="form-control" 
                                    value={value}
                                    onChange={handleChange}
                                    />
                                    <button type="submit"className="button-search bg-primary">
                                    <i class="fa fa-search" aria-hidden="true"></i>Search
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
