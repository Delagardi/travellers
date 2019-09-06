const initialState = {
  travels: null,
  loading: false,
  error: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TRAVELS_REQUEST':
      return {
        loading: true,
        error: null
      }
    
    case 'FETCH_TRAVELS_SUCCESS':
      return {
        travels: action.travels,
        loading: false,
        error: null,
      }
    
    case 'FETCH_TRAVELS_ERROR':
      return {
        error: action.error,
        loading: false,
      }

    default:
      return state
  }
}

export default reducer;