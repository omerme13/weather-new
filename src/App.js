import React, { Component } from 'react';

import Nav from './components/Nav/Nav';
import SearchBox from './components/SearchBox';
import WeatherBoxes from './components/WeatherBoxes/WeatherBoxes';

import './App.scss';

class App extends Component {

    state = {
        city: 'haifa',
        day: "",
        condition: "",
        temp: "",
        tempMin: "",
        tempMax: "",
        iconURL: "",
        apiKey: '352ab6b8c9501a470633fda871c77221'
    }

    componentDidMount() {       
        this.getWeather()
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    async getWeather() {  
        const currDay = new Date();
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.data.city}&appid=${this.state.apiKey}`);
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&cnt=40&APPID=${this.state.apiKey}`);

        const responseData = await response.json();
        this.setState({
            city: responseData.city.name,
            // day: Date().split(' ')[0],
            day: currDay.getDay(),
            temp: (responseData.list[0].main.temp - 273.15).toFixed(0),
            tempMax: (responseData.list[0].main.temp_max - 273.15).toFixed(0),
            tempMin: (responseData.list[0].main.temp_min - 273.15).toFixed(0),
            condition: responseData.list[0].weather[0].description,
            iconURL: 'http://openweathermap.org/img/w/' + responseData.list[0].weather[0].icon + '.png'

        });
        console.log(this.state);
        return responseData;
    }

    render() {

        return (
            <div className="App">
                <SearchBox />
                <Nav />
                <WeatherBoxes 
                    city={this.state.city}
                    temp={this.state.temp}
                    condition={this.state.condition}
                    minTemp={this.state.tempMin}
                    maxTemp={this.state.tempMax}
                    iconURL={this.state.iconURL}
                    day={this.state.day}
                />
            </div>
        );
    }
}

export default App;
