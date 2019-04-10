import React,{Component} from 'react';

import travel from '../travel.jpg';
import imgBaudhangana from '../images/attractions/buddhangala.jpg'
import imgDeegavapi from '../images/attractions/deegavapi.jpg';
import imgKudumbigala from '../images/attractions/kudumbigala.jpg';
import imgLahugala from '../images/attractions/lahugala.jpg';
import imgMahaOya from '../images/attractions/mahaoya_hw_springs.jpg';
import imgOkandaBeach from '../images/attractions/okanda.jpg';
import imgPiyankalaForest from '../images/attractions/piyangala_hermitage.jpg'


class Ampara extends Component{

    render() {
        return (
            <div className="container" style={{paddingTop:'50px'}}>

                <div className="row">
                    <div className="col-10">

                        <div className="card mb-3" style={{width: '800px', margin: '20px 150px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={imgBaudhangana} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Buddhangala Monastery</h5>

                                        <p className="card-text">
                                            Buddhangala Monastery is located not far away from Ampara town and the road condition is good due to recent
                                            Development process. Please note that there may be wild elephant movements close by so avoid travelling at night
                                            time. Buddhanga temple is build on a cascading rocks and a lake was built to store water for monastery monks.
                                            Once you climb to the most highest rock, you can get a good view of the surrounding. There is a recently build
                                            replicas of Polonnaruwa Gala Viharaya Buddha statues, which can be seen from the distance.

                                        </p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-12">

                        <div className="card mb-3" style={{width: '800px', margin: '20px 150px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={imgDeegavapi} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Deegavapi</h5>
                                        <p className="card-text">
                                            Deegavapi Viharaya is the sixth one of the Solosmasthana ( Sixteen most secret places to worship in
                                            Srilanka - where Load Buddha visited) and has a history up to 6th century B.C.Load Buddha visited Sri Lanka 3 times.
                                            On the 3rd time , first he visited to Kelaniya, then to mountain Sri Pada and rest in Diva Guhawa. On his return
                                            journey, he stay some time In Deegawapiya . It was stated that he was accompanied with 500 arahaths. It says that
                                            a dageba call "Naka Seya" was constructed with the "Niya Dhathu" (nail )of load Buddha at that time.

                                        </p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">

                        <div className="card mb-3" style={{width: '800px', margin: '20px 150px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={imgKudumbigala} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Kudumbigala</h5>
                                        <p className="card-text">
                                            Kudumbigala Monastery is located in middle of the jungle by the Panama - Kumana road. This place
                                            is special because of It's pagoda, the only one cylindrical shape dagoba in Sri Lanka.

                                        </p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-12">

                        <div className="card mb-3" style={{width: '800px', margin: '20px 150px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={imgLahugala} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Lahugala</h5>
                                        <p className="card-text">
                                            Home to a nearly 200 elephants who feeds on the flourishing grass lands around its main three tanks
                                            and numerous watering holes, LahugalaKitulana Forest Reserve is a 1554 hectare canvas of wildlife
                                            and archeology. Formed mainly by a dry zone evergreen forest the reserve provides field after field
                                            of water straw grass, a favorite snack of the elephants while the three main reservoirs - Lahugala,
                                            Kitulana and Sengamuwa provide never ending opportunities of water sports to the elephants.
                                            The elephants share the reserve with other animals like endemic toque macaque, common languor,
                                            sloth bear, jackal, rusty spotted cat, fishing cat, leopard, wild bear, Indian muntjac deer,
                                            spotted deer, sambar, pangolin and black naped hare.
                                        </p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">

                        <div className="card mb-3" style={{width: '800px', margin: '20px 150px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={imgMahaOya} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Maha Oya Hot Water Springs</h5>
                                        <p className="card-text">
                                            Maha Oya Hot Springs is located about 2km off Maha Oya town. This is said to be the hottest spring
                                            of all the hot springs on Sri Lanka. Here you will find well maintained 7 wells with different
                                            temperatures. The temperature of the hottest well is about 56C (133F). Only two wells are of bathing
                                            temperature. You can see continuous evaporation of steam from the other wells.

                                        </p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-12">

                        <div className="card mb-3" style={{width: '800px', margin: '20px 150px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={imgOkandaBeach} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Okanda Beach</h5>
                                        <p className="card-text">
                                            Okanda is located at the entrance gate of Kumana National Park, 20 km south of Arugam Bay.
                                            Okanda's picturesque coastline is free of hotel buildings and tourism and traffic noise and pollution.
                                            But bathing is dangerous because of underater currents. Okanda is a sacred site, too. In July it
                                            becomes a station for Sri Lanka's most significant pilgrimage, the Pada Yatra along the East Coast.
                                            Okanda is the last sanctuary before the final destination is reached, Kataragama. Devote pilgrims stay
                                            three day in Okanda and take ritual bathes in the ocean near the Kovil ("Kovil" is the Tamil name for
                                            a Hindu temple.) During the rest of the year the remote Okanda beach is a tranquil sandy beach.
                                            One heritage attraction nearby is the scenic Kudumbigala sanctuary, a former forest monastery.

                                        </p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">

                        <div className="card mb-3" style={{width: '800px', margin: '20px 150px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={imgPiyankalaForest} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Piyangala Forest Hermitage</h5>
                                        <p className="card-text">
                                            Built in the First Century BC by the Queen Rajitha, the main wife of King Dutugamunu, Piyangala
                                            Forest Hermitage remain a monastery up to today standing strong despite the thirty year war that
                                            stormed the Eastern Sri Lanka.Situated on a peak, the monastery is small in size compared to the
                                            other monasteries in the area. A stone paved path leads to the entrance of the monastery,
                                            which consist of a unique 100 feet long walking path designed for meditation. Spread with white
                                            sand and paved with granite the path leads way into the forest assisting generations of meditating
                                            monks in their pursuit for the end of samsara. A further way up the mountain leads to drip ledged
                                            caves of the meditating monks. Simpler in design the caves contain stone inscriptions detailing the
                                            donation and donator while some also carry drawings of forest dwelling vedda groups, who made the
                                            caves their home after the fall of the original monastery

                                        </p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>



            </div>
        );
    }
}

export default Ampara;

