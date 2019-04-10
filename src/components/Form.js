// Imports React
import React from "react";

/*
 * Input text boxes and button
 */
const Form = (props) => (
    <form onSubmit={props.getWeather}>
        <div className="row">
            <div className="col-8">

                <div className="form-group offset-6">
                    <input className="form-control" type="text" name="city" placeholder="City...."/><br/>
                    <input className="form-control" type="text" name="country" placeholder="Country...."/><br/>
                    <button className="btn btn-primary">Get Weather</button>
                </div>
            </div>
        </div>
    </form>
)

export default Form;