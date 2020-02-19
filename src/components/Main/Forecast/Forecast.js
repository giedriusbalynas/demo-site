import React from 'react';
import Umbrella from '../../../Assets/umbrella.svg';
import Snowflake from '../../../Assets/snowflake.svg';
import Sunglasses from '../../../Assets/sunglasses.svg';
import './Forecast.scss';

const API_key = "c663be7bebb51da819f6e5a44a4f53a5";

class Forecast extends React.Component {
    constructor() {
        super();
        this.state = {
            weather: ""
        };
        this.getWeather();
    }


    getWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Vilnius&appid=${API_key}`);
        const response = await api_call.json();
        const id = response.weather[0].id;
        const weather = parseInt(id.toString()[0]);
        this.setState({weather});
    };

    getWeatherImage = (weatherId) => {
        if (weatherId < 6) {
            return Umbrella;
        } else if (weatherId === 6) {
            return Snowflake;
        } else if (weatherId >= 8) {
            return Sunglasses;
        } else {
            return Sunglasses;
        }
    };

    render() {
        return (
            <div className="forecast">
                <img src={this.getWeatherImage(this.state.weather)} alt="Forecast"/>
            </div>
        )
    }
}

export default Forecast;
