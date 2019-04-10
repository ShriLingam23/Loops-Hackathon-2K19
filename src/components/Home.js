import React,{Component} from 'react';

import travel from '../travel.jpg';

class Home extends Component{

    render() {
        return (
          <div className="container" style={{paddingTop:'50px'}}>
    
            
    
            <div className="row">
                  <div className="col-6">
    
                    <div className="card mb-3" style={{maxWidth: '540px',marginTop:'50px'}}>
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img src={travel} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
    
                  </div>
    
                  <div className="col-6">
    
                    <div className="card mb-3" style={{maxWidth: '540px',marginTop:'50px'}}>
                        <div className="row no-gutters">
                          <div className="col-md-4">
                            <img src={travel} className="card-img" alt="..."/>
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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
                          <img src={travel} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
    
                  </div>
    
                  <div className="col-6">
    
                    <div className="card mb-3" style={{maxWidth: '540px',marginTop:'50px'}}>
                        <div className="row no-gutters">
                          <div className="col-md-4">
                            <img src={travel} className="card-img" alt="..."/>
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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

export default Home;

