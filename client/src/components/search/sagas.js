import { call, put, takeLatest } from 'redux-saga/effects'
import {
  fetchTravelSuccessAction,
  fetchTravelErrorAction
} from '../../actions'

function* fetchTravels(action) {
   try {
      const baseUrl = "http://localhost:5001/api/travellers/";
      let travelUrl = baseUrl;
      if (action.searchTerm) {
        travelUrl += action.searchTerm; 
      }
      const travels = yield call(fetch, travelUrl);

      const result = yield travels.json();
      
      yield put(fetchTravelSuccessAction(result));
   } catch (error) {
      yield put(fetchTravelErrorAction(error));
   }
}

function* travelSaga() {
  yield takeLatest("FETCH_TRAVELS_REQUEST", fetchTravels);
}

export default travelSaga;