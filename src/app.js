import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import Country from './components/Country/Country'
const App = () => {
    return (
        <div>
            <h1>App</h1>
            <h2><Cards /></h2>
            <h2><Chart /></h2>
            <h2><Country /></h2>
        </div>
    );
}

export default App;
