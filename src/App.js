import React, { Component } from 'react';

import Nav from './components/Nav/Nav';
import SearchBox from './components/SearchBox/SearchBox';
import WeatherBoxes from './components/WeatherBoxes/WeatherBoxes';

import './App.scss';

const apiKey = '352ab6b8c9501a470633fda871c77221';

class App extends Component {
    state = {
        city: 'new york',
        data: [{}],
        displayWeather: "first"
    }

    componentDidMount() {
        this.uploadWeather() 
    }

    uploadWeather = () => {
        this.getWeather(this.state.city)
            .then(res => res)
            .catch(err => console.log(err));
    }
    
    changeWeather = (e) => {
        const city = e.target.nextSibling.value;

        this.getWeather(city)
            .then(res => res)
            .catch(err => console.log(err));
    }

    displaySecondPart = () => {
        this.setState({displayWeather: "second"});
    }

    displayFirstPart = () => {
        this.setState({displayWeather: "first"});

    }

    getWeather = async (city) => {           
        const data = [];
        let currDay = new Date();
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=40&APPID=${apiKey}`);
        const responseData = await response.json();

        for (let i = 0; i < 40; i = i + 8) {
            let dayNum = (currDay.getDay() + (i/8)) % 7;
            data.push({
                day: dayNum,
                temp: (responseData.list[i].main.temp - 273.15).toFixed(0),
                tempMax: (responseData.list[i].main.temp_max - 273.15).toFixed(0),
                tempMin: (responseData.list[i].main.temp_min - 273.15).toFixed(0),
                condition: responseData.list[i].weather[0].description,
                iconURL: `https://openweathermap.org/img/w/${responseData.list[i].weather[0].icon}.png`
            });
        }

        this.setState({
            city: city,
            data: data
        });

        return responseData;
    }

    render() {
        return (
            <div className="App">
                <SearchBox getWeather={(e) => this.changeWeather(e)}/>
                <Nav 
                    displaySecondPart={this.displaySecondPart} 
                    displayFirstPart={this.displayFirstPart} 
                    show={this.state.displayWeather}
                />
                <WeatherBoxes 
                    city={this.state.city}
                    data={this.state.data}
                    class={this.state.class}
                    changeDays={this.state.displayWeather}
                />
            </div>
        );
    }
}

export default App;
