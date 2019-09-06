import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import TrainIcon from '@material-ui/icons/Train';

const getDepatueDate = (date) => {
  const depatueDate = new Date(date);
  return depatueDate.toLocaleString();
}

const getIcon = (vehicle) => {
  switch (vehicle) {
    case "plane":
      return <AirplanemodeActiveIcon/>
    case "car":
      return <DirectionsCarIcon/>
    case "train":
      return <TrainIcon/>
    
    default:
      return "no info";
  }
}

const TravelListItem = ({fromName, toName, departAt, vehicle}) => {
  return (
    <TableRow>
      <TableCell>
        {fromName}
      </TableCell>
      <TableCell align="right">{toName}</TableCell>
      <TableCell align="right">{getDepatueDate(departAt)}</TableCell>
      <TableCell align="right">{getIcon(vehicle)}</TableCell>
    </TableRow>
  )
}

export default TravelListItem;