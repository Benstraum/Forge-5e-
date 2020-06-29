import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* getRaces() {
    try {
        const responsePayload = yield axios.get(`/api/character/races`);
        console.log('in races router', responsePayload.data)
        yield put({ type: 'SET_RACES' , payload: responsePayload});
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* getAllRaces() {
    yield takeEvery('GET_RACES', getRaces);
}

export default getAllRaces;