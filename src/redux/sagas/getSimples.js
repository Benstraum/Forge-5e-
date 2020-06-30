import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* getEquipApi() {
    try {
        const responsePayload = yield axios.get(`https://www.dnd5eapi.co/api/equipment-categories/simple-weapons`);
        yield put({ type: 'SET_SIMPLES' , payload: responsePayload.data.equipment});
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* getSimples() {
    yield takeEvery('GET_SIMPLES', getEquipApi);
}

export default getSimples;