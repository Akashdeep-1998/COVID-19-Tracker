import React, { useState, useEffect } from "react";
import { fetchDailyUpdate } from "../../api/index";
import { Line, Bar } from "react-chartjs-2";

const Chart = (props) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchDailyData = async () => {
      setDailyData(await fetchDailyUpdate());
    };
    fetchDailyData();
  },[]);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "rgba(255,0,0,0.8)",
            fill: true,
          },
        ],
      }}
    ></Line>
  ) : null;

  const barChart = props.data.confirmed ? (
    <Bar
      data={{
          labels:['infected','Recovered','Deaths'],
          datasets:[{
              label:'People',
              backgroundColor:['rgba(0, 0, 255,0.8)','rgba(0, 255, 0,0.8)','rgba(255, 0, 0,0.8)'],
              data:[props.data.confirmed.value, props.data.recovered.value, props.data.deaths.value]
          }]
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${props.country}` },
      }}
    />
  ) : null;

  return (
  <div className="chart-container">
      {props.country ? barChart : lineChart}
      </div>
    );
};

export default Chart;
