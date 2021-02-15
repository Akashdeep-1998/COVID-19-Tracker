import React, { Component } from 'react';
import './App.module.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import Country from './components/Country/Country'
import { fetchData } from './api/index';
import coronaImage from './image.png';

class App extends Component {
    state={
        data:{},
        country:''
    }
    async componentDidMount()
    {
        const response=await fetchData();
        this.setState({data:response});
    }

    countryHandler=async(country)=>{
        const fetchCountryData=await fetchData(country);
        this.setState({data:fetchCountryData, country:country})
    }

    render() {
        return (
            <div className="app-container">
                <img src={coronaImage} className="image" alt="COVID-19" />
                <Cards data={this.state.data} />
                <Country countryChangeHandler={this.countryHandler} />
                <Chart data={this.state.data} country={this.state.country} />
            </div>
        );
    }
}

export default App;
