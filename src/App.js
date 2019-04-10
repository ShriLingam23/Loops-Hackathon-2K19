import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import brand from './images/brand.jpg';
import travel from './images/banner1.jpg';
import phone from '../src/images/phone-icon.png'
import mail from '../src/images/mail-icon.png'
import visit from '../src/images/visit-icon.png'

//importing the bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './components/Home'
import Converter from './components/Converter'
import Destinations from './components/Destinations'
import WeatherFinder from './components/WeatherFinder'

import Ampara from './components/Ampara'
import Colombo from './components/Colombo'

class App extends Component {

    render() {
        return (

            <Router>
                <div className="container">

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">

                        <a className="navbar-brand" href="https://google.com" target="_blank">
                            <img src={brand} width="30" height="30" alt="CodingTheSmartWay.com"/>
                        </a>

                        <Link to="/" className="navbar-brand">Loop's Tourism Solution</Link>

                        <div className="collpase navbar-collapse">

                            <ul className="navbar-nav mr-auto">

                                <li className="navbar-item">
                                    <Link to="/Destinations" className="nav-link">Destinations</Link>
                                </li>

                                <li className="navbar-item">
                                    <Link to="/WeatherFinder" className="nav-link">WeatherFinder</Link>
                                </li>

                                <li className="navbar-item">
                                    <Link to="/Converter" className="nav-link">CurrencyConverter</Link>
                                </li>

                            </ul>
                        </div>

                    </nav>
                    <br/>


                    <div className="card text-center">

                        <div className="card-body">
                            <img src={travel} className="img-fluid" alt="Responsive image"
                                 style={{paddingBottom: '20px'}}/>

                            <h5 className="card-title">An Island of Wonders!</h5>
                            <p className="card-text">Sri Lanka, officially the Democratic Socialist Republic of Sri
                                Lanka, is an island country in South Asia, located in the Indian Ocean to the southwest
                                of the Bay of Bengal and to the southeast of the Arabian Sea. </p>
                        </div>

                    </div>

                    <Route path="/" exact component={Home}/>
                    <Route path="/Converter" component={Converter}/>
                    <Route path="/Destinations" component={Destinations} />
                    <Route path="/WeatherFinder" component={WeatherFinder} />
                    <Route path="/Ampara" component={Ampara} />
                    <Route path="/Colombo" component={Colombo} />


                    <div className="col-12">
                        <br/><br/>
                        <div className="card bg-light mb-3" style={{maxWidth: '100%'}}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-4">
                                        <b>CALL</b> <br/>
                                        +94 11 123 4564
                                    </div>
                                    <div className="col-4">
                                        <b>EMAIL</b> <br/>
                                        <a className="email" href="#"
                                           style={{a: 'link:'}}>loops.travelogue@srilanka.lk</a>
                                    </div>
                                    <div className="col-4">
                                        <b>VISIT </b><br/>
                                        21 St Green's Road, Colombo 15, Sri Lanka.
                                    </div>
                                </div>
                            </div>
                            <div className="card-header text-center">Copyright &copy; 2019 - All Rights Reserved by
                                Loops
                            </div>

                        </div>
                    </div>
                </div>
            </Router>

        );
    }
}

export default App;
