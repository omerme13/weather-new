import React, { Component } from 'react';

import Nav from './components/Nav/Nav';
import SearchBox from './components/SearchBox';
import WeatherBoxes from './components/WeatherBoxes/WeatherBoxes';

import './App.scss';

const apiKey = '352ab6b8c9501a470633fda871c77221';

class App extends Component {
    state = {
        city: 'new york',
        data: [{}],
        // class: "",
        displayWeather: "first"
    }

    componentDidMount() {
        this.uploadWeather() 
    }

    uploadWeather = () => {
        this.getWeather(this.state.city)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    
    changeWeather = (e) => {
        const city = e.target.nextSibling.value;

        this.getWeather(city)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    slideBoxes = () => {
        // this.setState({class: "slide"});
        this.setState({displayWeather: "second"});
    }

    slideBoxesBack = () => {
        // this.setState({class: ""});
        this.setState({displayWeather: "first"});

    }

    async getWeather(city) {           
        const data = [];
        let currDay = new Date();
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=40&APPID=${apiKey}`);
        const responseData = await response.json();

        for (let i = 0; i < 40; i = i + 7) {
            let dayNum = (currDay.getDay() + (i/7)) % 7;
            data.push({
                day: dayNum,
                temp: (responseData.list[i].main.temp - 273.15).toFixed(0),
                tempMax: (responseData.list[i].main.temp_max - 273.15).toFixed(0),
                tempMin: (responseData.list[i].main.temp_min - 273.15).toFixed(0),
                condition: responseData.list[i].weather[0].description,
                iconURL: 'http://openweathermap.org/img/w/' + responseData.list[i].weather[0].icon + '.png'
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
                    slideBoxes={this.slideBoxes} 
                    slideBoxesBack={this.slideBoxesBack} 
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
