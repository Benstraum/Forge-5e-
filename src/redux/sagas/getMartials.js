import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* getEquipApi() {
    try {
        const responsePayload = yield axios.get(`https://www.dnd5eapi.co/api/equipment-categories/martial-weapons`);
        yield put({ type: 'SET_MARTIALS' , payload: responsePayload.data.equipment});
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* getMartials() {
    yield takeEvery('GET_MARTIALS', getEquipApi);
}

export default getMartials;