import React from 'react';
import { connect } from 'react-redux';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import './error-indicator.css';

const ErrorIndicator = (props) => {
  const { error } = props;
  return (
    <div className="error-indicator mx-auto">
      <ErrorOutlineIcon 
        color="error"
        fontSize="large"/>
      <h3>Something goes wrong here: {error}</h3>
    </div>
  );
}

const mapStateToProps = ({ error }) => {
  return {
    error: error.message
  }
}

export default connect(mapStateToProps)(ErrorIndicator);