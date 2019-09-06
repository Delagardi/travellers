import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { fetchTravelsAction } from '../../actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchTravelsAction());
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== "") {
      this.props.dispatch(fetchTravelsAction(this.state.searchQuery));
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value })
  }
  showAllTravels = () => {
    this.props.dispatch(fetchTravelsAction());
  }
  render() {
    return (
      <TextField
        value={this.state.value}
        onChange={this.onSearchChange}
        id="standard-search"
        label="Search for travel"
        type="search"
        className="search-bar"
        margin="normal"
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Search);
