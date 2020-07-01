import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* getEquipApi() {
    try {
        const responsePayload = yield axios.get(`https://www.dnd5eapi.co/api/equipment/shield`);
        console.log(responsePayload)
        yield put({ type: 'SET_SHIELDS' , payload: responsePayload.data});
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* getShields() {
    yield takeEvery('GET_SHIELDS', getEquipApi);
}

export default getShields;