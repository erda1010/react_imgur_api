import React, { Component } from 'react'
import './App.css';
import Imagelist from "./components/Imagelist";
import ImageDetails from "./components/ImageDetails";
import ImageSearch from './components/ImageSearch';


class App extends Component {
  state = {
    data: [],
    url: "https://api.imgur.com/3/gallery/",
    base_url: "https://api.imgur.com/3/gallery/",
    apiKey: '2a8c88d6036776b',
    id: "LrJJXMz",
    pageIndex: 1,
    search: 'hot',
    search_new:'hot',
    error: '',
    sort:'/viral'
  };

  async getData() {
    try {
      const datas = await fetch(this.state.url + this.state.search +this.state.sort , {
        headers: {
          'Authorization': 'Client-ID ' + this.state.apiKey
        }
      });
      const jsonDatas = await datas.json();
      if (jsonDatas.data.length === 0) {
        this.setState(() => {
          return { error: 'No data' }
        })
      }
      else {
        this.setState(() => {
          return { data: jsonDatas.data }
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getData()
  }


  handleIndex = index => {
    this.setState({
      pageIndex: index
    })
  };

  handleDetals = (index, id) => {
    this.setState({
      pageIndex: index,
      id: id
    })
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
      search_new: e.target.value,
    },
      () => {
        console.log(this.state.search_new)
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { base_url, search,error,sort } = this.state;
    this.setState(() => {
      return { url: `${base_url}${search}${sort}`, search: '',error:''}
    }, () => {
      if(search === 'top' || search === 'hot' || search === 'user' ){
        this.getData();
      }
      else {
        this.setState(()=>{
          return{error:'You have search with the wrong keys'}
        })
      }
  
    })
  };
  handleSort = (e) => {
    e.preventDefault();
    this.state.sort = '/viral';
    const { base_url, search_new,sort } = this.state;
    this.setState(() => {
      return { url: `${base_url}${search_new}${sort}`}
    }, () =>{
      this.getData();
      console.log('handlesort',this.state.url)
      console.log('handlesort',this.getData())
    })
  };
  handleSortTop = (e) => {
    e.preventDefault();
    this.state.sort = '/top';
    const { base_url, search_new,sort } = this.state;
    this.setState(() => {
      return { url: `${base_url}${search_new}${sort}`}
    }, () =>{
      this.getData();
      console.log('handlesort',this.state.url)
    })
  };
  handleSortTime = (e) => {
    e.preventDefault();
    this.state.sort = '/time';
    const { base_url, search_new,sort } = this.state;
    this.setState(() => {
      return { url: `${base_url}${search_new}${sort}`}
    }, () =>{
      this.getData();
      console.log('handlesort',this.state.url)
    })
  };
  handleSortRising = (e) => {
    e.preventDefault();
    this.state.sort = '/rising';
    const { base_url, search_new,sort } = this.state;
    this.setState(() => {
      return { url: `${base_url}${search_new}${sort}`}
    }, () =>{
      this.getData();
      console.log('handlesort',this.state.url)
    })
  };
  displayPage = (index) => {
    switch (index) {
      default:
      case 1:
        return (<Imagelist data={this.state.data}
          handleDetals={this.handleDetals}
          value={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleSort={this.handleSort}
          handleSortTop={this.handleSortTop}
          handleSortTime={this.handleSortTime}
          handleSortRising={this.handleSortRising}
          error={this.state.error}
        />);
      case 0:
        return (<ImageDetails
          id={this.state.id}
          search={this.state.search_new}
          sort={this.state.sort}
          handleIndex={this.handleIndex}
        />);
    }
  };

  render() {
    console.log(this.state.data)
    return (

      <div className="App">
        <header className="App-header">
          <React.Fragment>
            {this.displayPage(this.state.pageIndex)}
          </React.Fragment>
        </header>
      </div>
    )
  }
}

export default App;


