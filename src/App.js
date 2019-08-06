import React, { Component } from 'react';

import Nav from './components/Nav/Nav';
import SearchBox from './components/SearchBox/SearchBox';
import WeatherBoxes from './components/WeatherBoxes/WeatherBoxes';
import Background from './components/Background/Background';

import './App.scss';

const apiKey = '352ab6b8c9501a470633fda871c77221';

let initialCity = localStorage.getItem('city');
if (!initialCity) {
    initialCity = 'new york';
}

class App extends Component {
    state = {
        city: initialCity,
        country: '',
        data: [{}],
        background: '',
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

    getWeatherData = (responseData) => {
        const data = [];
        let curDay = new Date();

        for (let i = 0; i < 40; i = i + 8) {
            let max = (responseData.list[i].main.temp_max - 273.15);
            let min = (responseData.list[i].main.temp_min - 273.15);
            
            for (let j = 1; j < 8; j++) {
                let curMax = (responseData.list[i + j].main.temp_max - 273.15);
                let curMin = (responseData.list[i + j].main.temp_min - 273.15);

                if (curMax > max) {
                    max = curMax;
                }
                if (curMin < min) {
                    min = curMin;
                }
            }

            let dayNum = (curDay.getDay() + (i/8)) % 7;

            data.push({
                day: dayNum,
                humidity: responseData.list[i].main.humidity,
                temp: (responseData.list[i].main.temp - 273.15).toFixed(0),
                tempMax: max.toFixed(0),
                tempMin: min.toFixed(0),
                condition: responseData.list[i].weather[0].description,
                iconURL: `https://openweathermap.org/img/w/${responseData.list[i].weather[0].icon}.png`
            });
        }
        
        return {
            data: data,
            country: responseData.city.country
        };
    }

    getWeather = async (city) => {           
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=40&APPID=${apiKey}`);
        const responseData = await response.json();    
        const weatherData = this.getWeatherData(responseData);

        localStorage.setItem('city', city);
        this.setState({
            city: city,
            data: weatherData.data, 
            country: weatherData.country,
            background: responseData.list[0].weather[0].icon.slice(0, -1)
        });
        
        return weatherData.data;
    }

    displayFirstPart = () => this.setState({displayWeather: "first"});
    
    displaySecondPart = () => this.setState({displayWeather: "second"});

    render() {
        return (
            <div className="App">
                <Background cond={this.state.background}>
                    <SearchBox getWeather={(e) => this.changeWeather(e)}/>
                    <Nav 
                        displaySecondPart={this.displaySecondPart} 
                        displayFirstPart={this.displayFirstPart} 
                        show={this.state.displayWeather}
                    />
                    <WeatherBoxes 
                        city={this.state.city}
                        data={this.state.data}
                        country={this.state.country}
                        class={this.state.class}
                        changeDays={this.state.displayWeather}
                    />
                </Background>
            </div>
        );
    }
}

export default App;