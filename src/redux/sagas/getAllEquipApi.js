import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* getEquipApi() {
    try {
        const responsePayload = yield axios.get(`https://www.dnd5eapi.co/api/equipment`);
        yield put({ type: 'SET_EQUIP' , payload: responsePayload.data.results});
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* getAllEquipApi() {
    yield takeEvery('GET_ITEMS', getEquipApi);
}

export default getAllEquipApi;