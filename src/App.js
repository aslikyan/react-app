import React, { Component } from 'react';
import './App.css';
import Header from './header'
import Content from './content'
import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div className={'contain'}>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
