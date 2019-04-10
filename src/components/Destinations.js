import React, {Component} from 'react';

import { Link } from 'react-router-dom';

import kandy from "../images/locations/kandy.jpg";
import colombo from "../images/locations/colombo.jpg";
import galle from "../images/locations/galle.jpg";
import ham from "../images/locations/hambantota.jpg";
import jaffna from "../images/locations/jaffna.jpg";
import anuradhapura from "../images/locations/anuradhapura.jpg";
import badulla from "../images/locations/badulla.jpg";
import batticaloa from "../images/locations/batticaloa.jpg";
import kalutara from "../images/locations/kalutara.jpg";
import trincomalee from "../images/locations/trincomalee.jpg";


export default class Destinations extends Component {

    render() {
        return (

            <div className="container" style={{paddingTop:'50px'}}>

                <div className="row">
                    <div className="col-6">

                        <div className="card mb-3" style={{maxWidth: '540px',marginTop:'50px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={kandy} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Kandy</h5>
                                        <p className="card-text">Situated amidst the towering hills it is the last Royal Kingdom to give away to the invading armies of British. Having survived the Dutch and Portuguese invasions it was also the resting place of the sacred tooth relic of Lord Buddha.</p>
                                        <a className="btn btn-warning"><Link to='/Kandy'>Click Me</Link></a>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-6">

                        <div className="card mb-3" style={{maxWidth: '650px',marginTop:'50px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={anuradhapura} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Anuradhapura</h5>
                                        <p className="card-text">Sri Lanka's third and the longest serving capital and one of the oldest continuously inhabited cities in the world is also one of the most sacred cities of World Buddhists.</p>
                                        <a className="btn btn-warning"><Link to='/Anuradhapura'>Click Me</Link></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">

                        <div className="card mb-3" style={{maxWidth: '600px',marginTop:'50px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={badulla} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Badulla</h5>
                                        <p className="card-text">Almost encircled by the Badulu Oya (River), and is surrounded by picturesque hills and mountains, most of which have tea plantations.</p>
                                        <a className="btn btn-warning"><Link to='/Badulla'>Click Me</Link></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-6">

                        <div className="card mb-3" style={{maxWidth: '600px',marginTop:'50px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={batticaloa} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Batticaloa</h5>
                                        <p className="card-text">Known as Batti for short, is a relatively compact, steamy centre that oozes an intangible charm, magnified by the palm-filtered sunlight glancing off the surrounding lagoons.</p>
                                        <a className="btn btn-warning"><Link to='/Batticaloa'>Click Me</Link></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="row">
                    <div className="col-6">

                        <div className="card mb-3" style={{maxWidth: '540px',marginTop:'50px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={colombo} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Colombo</h5>
                                        <p className="card-text">A busy and vibrant place with a mixture of modern life and colonial buildings and ruins. It was the political capital of Sri Lanka, before Sri Jayawardenepura Kotte. </p>
                                        <a className="btn btn-warning"><Link to='/Colombo'>Click Me</Link></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-6">

                        <div className="card mb-3" style={{maxWidth: '650px',marginTop:'50px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={galle} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Galle</h5>
                                        <p className="card-text">Sri Lanka's ancient harbor town is a melting pot of cultures, religions, races and trade and as vibrant and international as any cosmopolitan in the world. </p>
                                        <a className="btn btn-warning"><Link to='/Galle'>Click Me</Link></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">

                        <div className="card mb-3" style={{maxWidth: '600px',marginTop:'50px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={trincomalee} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Trincomalee</h5>
                                        <p className="card-text">Shortly known as Trinco, it appeals to tourists primarily as the gateway to the fine Uppuveli and Nilaveli beaches. The town itself is mildly attractive and is situated around several picturesque bays and rocky peninsulas.
                                        </p>
                                        <a className="btn btn-warning"><Link to='/Trincomalee'>Click Me</Link></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-6">

                        <div className="card mb-3" style={{maxWidth: '600px',marginTop:'50px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={kalutara} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Kalutara</h5>
                                        <p className="card-text">Also known as Kalutota it is a big town in Western Province. It is also the third largest urban area in Western Province after Colombo and Negombo and is a scenic resort town.</p>
                                        <a className="btn btn-warning"><Link to='/Kulutara'>Click Me</Link></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>




            </div>


        )
    }

}
