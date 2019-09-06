import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import { connect } from 'react-redux';
import { fetchTravelErrorAction } from '../../actions';

class ErrorBoundry extends Component {
  componentDidCatch(error) {
    this.props.dispatch(fetchTravelErrorAction(error));
  }

  render() {
    if (this.props.error) {
      return <ErrorIndicator/>
    }

    return this.props.children;
  }
}

const mapStateToProps = ({ error }) => {
  return {
    error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundry);