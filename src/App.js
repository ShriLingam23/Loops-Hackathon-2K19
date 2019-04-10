import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

import brand from './brand.jpg';
import travel from './travel.jpg';

//importing the bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Home from './components/Home'
import Converter from './components/Converter'

class App extends Component {
  render() {
    return (
      
      <Router>
        <div className="container" style={{marginBottom:'50px'}}>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <a className="navbar-brand" href="https://google.com" target="_blank">
              <img src={brand} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>

            <Link to="/" className="navbar-brand">Loop's Tourism Solution</Link>

            <div className="collpase navbar-collapse">

              <ul className="navbar-nav mr-auto">

                <li className="navbar-item">
                  <Link to="/converter" className="nav-link">Currency Converter</Link>
                </li>

              

              </ul>
            </div>

          </nav>
          <br/>

          <div className="card text-center">
              
              <div className="card-body">
                <img src={travel} className="img-fluid" alt="Responsive image" style={{paddingBottom:'20px'}} />
    
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
              
            </div>

          <Route path="/" exact component={Home} />
          <Route path="/converter" exact component={Converter} />
          
        </div>
      </Router>
      
    );
  }
}

export default App;
