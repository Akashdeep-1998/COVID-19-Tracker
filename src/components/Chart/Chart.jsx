import React, {useState,useEffect} from 'react';
import {fetchDailyUpdate} from '../../api/index';
import {Line, Bar} from 'react-chartjs-2';
import Style from './Chart.module.css'

const Chart= () => {
    const[dailyData,setDailyData]=useState([]);

    useEffect(()=>{
        const fetchDailyData=async()=>{
            setDailyData(await fetchDailyUpdate());
        }
        fetchDailyData();   
    })

    const lineChart=(
        dailyData.length?<Line data={{
            labels:dailyData.map(({date})=>date),
            datasets:[{
                data:dailyData.map(({confirmed})=>confirmed),
                label:"Infected",
                borderColor:'#3333ff',
                fill:true
            },{
                data:dailyData.map(({deaths})=>deaths),
                label:"Deaths",
                borderColor:'rgba(255,0,0,0.5)',
                fill:true

            }],
        }}>
        </Line>:null
    )

    return (
        <div className={Style.container}>
            {lineChart}
        </div>
    );
}

export default Chart;
