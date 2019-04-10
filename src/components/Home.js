import
    React, {Component} from 'react';

import Hiking from '../images/Hiking.jpg';
import WildLife from '../images/wild.jpg';
import Road from '../images/roadTrip.jpg';
import Surfing from '../images/surf.jpg';
import ampara from '../images/locations/ampara.jpg'
import anuradhapura from '../images/locations/anuradhapura.jpg'
import badulla from '../images/locations/badulla.jpg'
import batticaloa from '../images/locations/batticaloa.jpg'
import colombo from '../images/locations/colombo.jpg'
import galle from '../images/locations/galle.jpg'
import hambantota from '../images/locations/hambantota.jpg'
import jaffna from '../images/locations/jaffna.jpg'
import {Link} from "react-router-dom";


class Home extends Component {

    render() {
        return (
            <div className="container" style={{paddingTop: '50px'}}>

                <h3 className="text-center">TOP THINGS TO DO IN SRI LANKA</h3>

                <div className="row">
                    <div className="col-6">

                        <div className="card mb-3" style={{maxWidth: '540px', marginTop: '50px'}}>
                            <div className="row no-gutters">

                                <img className="card-img-top" src={Hiking} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Hiking & Trekking</h5>

                                    <p className="card-text">Trekking in Sri Lanka and Hiking in Sri Lanka is the
                                        most prominent way to explore the secrets of the island's beauty such as
                                        through the forest, across the paddy fields, beautiful water falls, tropical
                                        rain forests, mountains, valleys and pristine remote villages. You can not
                                        only experience the beauty of location, while you are trekking in Sri Lanka
                                        you may connect with community, experience customs and
                                        hospitality. <br/><br/></p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-6">

                        <div className="card mb-3" style={{maxWidth: '540px', marginTop: '50px'}}>
                            <div className="row no-gutters">

                                <img className="card-img-top" src={WildLife} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">WildLife Safaries</h5>
                                    <p className="card-text">Sri Lanka maybe small in size but it is big in the
                                        wildlife it has to offer. Packed into this tiny island is an abundance of
                                        natural wildlife starting from the famous Asian Elephant to the elusive
                                        leopard. The country has nine national parks and seven bird sanctuaries.
                                        Wilpattu, Yala, Udawalawe, Minneriya, Kumana, Bundala and Lahugala are a
                                        must to visit in such sanctuaries. The country has recently also grown in
                                        fame as being a hotspot for whale and dolphin watching. </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">

                        <div className="card mb-3" style={{maxWidth: '540px', marginTop: '50px'}}>
                            <div className="row no-gutters">

                                <img className="card-img-top" src={Road} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Road Trip</h5>

                                    <p className="card-text">A road trip through Sri Lanka that includes the
                                        world-famous Dutch Fort in Galle, the Royal Botanical Gardens, Tea Factory,
                                        the huge Bahirawakanda Buddha statue and the town of Nuwara Eliya known as
                                        "Little England" for its colonial British architecture. Enjoy an overnight
                                        stay at a temple with talks on Buddhist philosophy, natural Ayuverda
                                        treatment, a boat trip along the Madu Ganga, Kandy's famous 14th century
                                        Three Temple Loop with their intricate hand-carvings and finally some Yoga
                                        and Meditation sessions. </p>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-6">

                        <div className="card mb-3" style={{maxWidth: '540px', marginTop: '50px'}}>
                            <div className="row no-gutters">

                                <img className="card-img-top" src={Surfing} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Surfing</h5>
                                    <p className="card-text">Beaches are not just for sunbathing on, as any surfer
                                        will tell you. Especially in Sri Lanka, one of the most reliable surf
                                        destinations in the Indian Ocean. Since the early 60’s Sri Lanka attracts
                                        surfers from all over the world. The best surf points in Sri Lanka are
                                        located on the South and East Coast with Hikkaduwa and Arugam Bay being the
                                        busiest, but there are many “secret spots” like Unawatuna, Ahangama,
                                        Weligama, Mirissa or Yala where you still can find uncrowded
                                        surf. <br/><br/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                <h4 className="card-title text-center">HOT DESTINATIONS IN SRI LANKA</h4>
                <br/>

                <div className="row">
                    <div className="col-sm-4">
                        <div className="card border-primary mb-3 responsiveImg" style={{maxWidth: '20rem'}}>
                            <div className="card-header">Ampara</div>
                            <div className="card-body text-dark">
                                <Link to="/Ampara">
                                    <img src={ampara} style={{width: '300px'}} className="card-img" alt="..."/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
                            <div className="card-header">Anuradhapura</div>
                            <div className="card-body text-dark">
                                <Link to="/Anuradhapura">
                                    <img src={anuradhapura} style={{width: '300px'}} className="card-img" alt="..."/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
                            <div className="card-header">Badulla</div>
                            <div className="card-body text-dark">
                                <Link to="/Badulla">
                                    <img src={badulla} style={{width: '300px'}} className="card-img" alt="..."/>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
                            <div className="card-header">Batticaloa</div>
                            <div className="card-body text-dark">
                                <Link to="/Batticaloa">
                                    <img src={batticaloa} style={{width: '300px'}} className="card-img" alt="..."/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
                            <div className="card-header">Colombo</div>
                            <div className="card-body text-dark">
                                <Link to="/Colombo">
                                    <img src={colombo} style={{width: '300px'}} className="card-img" alt="..."/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
                            <div className="card-header">Galle</div>
                            <div className="card-body text-dark">
                                <Link to="/Galle">
                                    <img src={galle} style={{width: '300px'}} className="card-img" alt="..."/>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">

                    <div className="col-sm-4 offset-2">
                        <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
                            <div className="card-header">Hambantota</div>
                            <div className="card-body text-dark">
                                <Link to="/Hambantota">
                                    <img src={hambantota} style={{width: '300px'}} className="card-img" alt="..."/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
                            <div className="card-header">Jaffna</div>
                            <div className="card-body text-dark">
                                <Link to="/Jaffna">
                                    <img src={jaffna} style={{width: '300px'}} className="card-img" alt="..."/>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        );
    }
}

export default Home;

