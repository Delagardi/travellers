import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { compose } from 'redux';
import TravelListItem from '../travel-list-item';
import Typography from '@material-ui/core/Typography';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { withStyles } from '@material-ui/core';

const styles = {
  sorryMessage: {
    width: '400px',
    padding: '10px',
    textAlign: 'center',
    color: '#CC3300',
  },
  sorryMessageIcon: {
    verticalAlign: 'middle',
  }
};

const TravelList = (props) => {
  const { travels, classes } = props;
  return (
    <Paper>
      {travels.length > 0 
        ? <Table>
            <TableHead>
              <TableRow>
                <TableCell>From</TableCell>
                <TableCell align="right">To</TableCell>
                <TableCell align="right">Departue At</TableCell>
                <TableCell align="right">Vehicle</TableCell>
              </TableRow>
            </TableHead>
              <TableBody>
                {travels.map((travel, id = 0) => (
                <TravelListItem key={id} {...travel}/>))}
              </TableBody>
          </Table>
        : <Typography variant="body1" className={classes.sorryMessage}>
            There are no trips matching the search criteria
            <SentimentVeryDissatisfiedIcon className={classes.sorryMessageIcon} />
          </Typography>}
    </Paper>
  )
}

const mapStateToProps = (state) => {
  return {
    travels: state.travels,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(TravelList);