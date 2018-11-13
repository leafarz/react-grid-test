import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import About from './components/About';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Games from './components/Games';
import Header from './components/Header';
import Home from './components/Home';
import News from './components/News';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />

          <Route exact path='/' component={Home} />
          <Route path='/games' component={Games} />
          <Route path='/news' component={News} />
          <Route path='/careers' component={Careers} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />

          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
