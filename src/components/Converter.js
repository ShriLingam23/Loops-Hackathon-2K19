import React,{Component} from 'react';

import travel from '../travel.jpg';

class Converter extends Component{

    render() {
        return (
          <div className="container" style={{paddingTop:'50px'}}>

            <div class="card" style={{textAlign:'center'}}>
            <h5 class="card-header">Real Time Currency Converter</h5>
            <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            
          </div>
        );
    }
}

export default Converter;

