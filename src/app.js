import React, { Component } from 'react';
import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import Country from './components/Country/Country'
import { fetchData } from './api/index';

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
        console.log(fetchCountryData);
    }

    render() {
        return (
            <div className={styles.container}>
                <Cards data={this.state.data} />
                <Country countryChangeHandler={this.countryHandler} />
                <Chart />
            </div>
        );
    }
}

export default App;
