import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import ImgMediaCard from "./MediaCar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useLaunchesQuery, LaunchesQuery } from "./generated/graphql";

const App: React.FC = () => {
  const { data, loading } = useLaunchesQuery();

  const renderCards = (data: LaunchesQuery | undefined) => {
    if (!data || !data.launchesPast) {
      return null;
    }

    return (
      <Grid container spacing={2}>
        {data.launchesPast.map((item: any) => (
          <Grid item>
            <ImgMediaCard
              title={item.mission_name}
              learnMore={item?.links?.article_link}
              imageUrl={item?.ships?.[0]?.image}
            />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <>
      <CssBaseline />
      <Container style={{ padding: 32 }} maxWidth="sm">
        <Grid container direction="row" justify="center" alignItems="center">
          {loading && <CircularProgress variant="indeterminate" />}
          {renderCards(data)}
        </Grid>
      </Container>
    </>
  );
};

export default App;
