// Imports react
import React from "react";

/*
 * Returns weather object
 */
const Weather = (props) => (
    <div className="weather__info">
        {
            props.city && props.country && <p className = "weather__key"> Location:
                <span className = "weather__value"> {props.city}, {props.country} </span>
            </p>
        }
        {
            props.temperature && <p className = "weather__key">Temperature:
                <span className = "weather__value"> {props.temperature} </span> </p>
        }
        {
            props.humidity && <p className = "weather__key"> Humidity:
                <span className = "weather__value"> {props.humidity} </span> </p>
        }
        {
            props.description && <p className = "weather__key"> Conditions:
                <span className = "weather__value"> {capitaliseFirstLetter(props.description)} </span> </p>
        }
        {
            props.windSpeed && <p className = "weather__key"> Wind Speed:
                <span className = "weather__value"> {props.windSpeed} </span> </p>
        }
        {
            props.error && <p className = "weather__error">
                {props.error} </p>
        }

    </div>
);

/*
 * Returns a string with the first letter of each word capitalised
 *
 * @param description string
 */
function capitaliseFirstLetter(description){

    return description.replace(/\w\S*/g, function(text){
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
}

export default Weather;