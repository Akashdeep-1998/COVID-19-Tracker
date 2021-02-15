import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import "./Cards.module.css";
import CountUp from "react-countup";

const Cards = (props) => {
  console.log(props);
  if (!props.data.confirmed) {
    return <h3>Loading....</h3>;
  }
  return (
    <div className="container">
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className="card infected">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data.confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of active cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card recovered">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data.recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of Recovered cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card deaths">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data.deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of Deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
