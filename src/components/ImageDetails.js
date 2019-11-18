import React, { Component } from 'react';

export default class ImageDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: `https://api.imgur.com/3/gallery/${this.props.search}${this.props.sort}`,
      apiKey: '2a8c88d6036776b'
    };
  }

  async componentDidMount() {
    try {
      const datas = await fetch(this.state.url, {
        headers: {
          'Authorization': 'Client-ID ' + this.state.apiKey
        }
      });
      const jsonDatas = await datas.json();
      this.setState({
        data: jsonDatas.data.find(item => item.id === this.props.id)
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log("state", this.state.url)
    const {
      title,
      score,
      ups,
      downs,
      images = [],
      description
    } = this.state.data;
    const { handleIndex } = this.props
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 back-btn">
              <button type="button" className="btn btn-warning text-captalize"
                onClick={() => handleIndex(1)}>
                Back To Gallery
                            </button>
            </div>
            <div className="col-12 col-md-12 decription_parent">
              <div className="details description">Image description(from parent gallery)</div>
              <div className="details"><span className="text-inside">Title:</span>{title}</div>
              <div className="details"><span className="text-inside">description: </span>{description}</div>
              <div className="details"><span className="text-inside">Score: </span>{score}</div>
              <div className="details"><span className="text-inside">Up votes:</span> {ups}</div>
              <div className="details"><span className="text-inside">Down votes:</span> {downs}</div>
            </div>
            <div className="col-10 col-md-12 img-big">
              {images.map(el => {
                return <div className="col-12 col-md-12 img_gallery_detail">
                  <img src={el.link} alt="imgurphoto" />
                  <div className="col-12 col-md-12 decription_parent">
                    <div className="details description">Image description</div>
                    <div className="details"><span className="text-inside">Title:</span>{el.title}</div>
                    <div className="details"><span className="text-inside">Score:</span>{el.score}</div>
                    <div className="details"><span className="text-inside">Description:</span>{el.description}</div>
                    <div className="details"><span className="text-inside">Up votes:</span>{el.ups}</div>
                    <div className="details"><span className="text-inside">Down votes:</span>{el.downs}</div>
                  </div>
                </div>
              })}
            </div>

          </div>
        </div>
      </React.Fragment>
    )
  }
}
