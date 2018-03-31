import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//components

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import MyForm from './components/formComponent/form';
import Homepage from './components/pages/homePage';
import Products from './components/pages/products';
//css file generated from gulp scss
import './Assets/css/default.min.css';

const API_KEY = "jGjkDf7CiFRi5G2oJRrYmCfNFc9Kpc7u";

class App extends Component {

  state = {
  title: undefined, 
  embed_url: undefined

  }
  
  getgify = async (e) => {

    e.preventDefault();

    const search = e.target.elements.formsearch.value;

    const api_call = await fetch("http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + API_KEY + "&limit=5");

  const data = await api_call.json();
  console.log(data.data[0].title);
  this.setState({
   title: data.data[0].title,
   embed_url: data.data[0].embed_url
  })

  }

  render() {
    return (
      <Router>
      <div className="App">
       <Header  />
      
      
      <Route exact path='/' component={Homepage} />
      <Route exact path='/Products' component={Products} />

      <Route exact path="/MyForm" render={(props) => ( <MyForm getgify ={this.getgify}/> )} />

      <Footer 
      title = {this.state.title}
      embed_url = {this.state.embed_url}
      />
      </div>
      </Router>
    );
  }
}

export default App;
