import React from 'react';
import Grid from '@material-ui/core/Grid';
import TravelList from '../travel-list';
import Typography from '@material-ui/core/Typography';
import Search from '../search';
import { connect } from 'react-redux';
import Spinner from '../spinner';

import './app.css';

const App = (props) => {
  const { loading } = props;
  const isLoading = loading && <Spinner/>;
  return(
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Typography variant="h2" gutterBottom>
      Find your travel
      </Typography>
      <Search/>
      {isLoading || (props.travels && <TravelList/>)}
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    travels: state.travels,
    loading: state.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
