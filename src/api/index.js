import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeUrl=url;
    if(country){
        changeUrl=`${url}/countries/${country}`;
    }
    try {
        const {data} = await axios.get(changeUrl);
        const covidData={
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate
        }
        return covidData;
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchDailyUpdate=async()=>{
    try{
        const {data}= await axios.get(`${url}/daily`);
        const modifiedData=data.map(dailyData=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }))
        return modifiedData;
    }
    catch(err){
        console.log(err);
    }
}

export const countries=async()=>{
    try{
        const {data:{countries}}=await axios.get(`${url}/countries`);
        const modifiedData=countries.map(country=>country.name);
        return modifiedData;
    }
    catch(err){
        console.log(err);
    }
}
