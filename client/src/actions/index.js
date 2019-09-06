const fetchTravelsAction = (searchTerm) => {
  return ({
    type: "FETCH_TRAVELS_REQUEST",
    searchTerm,
  });
}

const fetchTravelSuccessAction = (travels) => {
  return ({
    type: "FETCH_TRAVELS_SUCCESS",
    travels,
  });
}

const fetchTravelErrorAction = (error) => {
  return ({
    type: "FETCH_TRAVELS_ERROR",
    error,
  });
}

export {
  fetchTravelsAction,
  fetchTravelSuccessAction,
  fetchTravelErrorAction,
}