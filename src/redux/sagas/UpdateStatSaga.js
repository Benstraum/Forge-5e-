

import axios from 'axios';
import {  takeEvery } from 'redux-saga/effects';


function* updatestat(action) {
    try {
        yield axios.put(`/api/character/sheet`, action.payload);
   
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* updateStatSaga() {
    yield takeEvery('UPDATE_ABILITIES', updatestat);
}

export default updateStatSaga;