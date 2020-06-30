import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* getEquipApi() {
    try {
        const responsePayload = yield axios.get(`https://www.dnd5eapi.co/api/equipment-categories/equipment-packs`);
        yield put({ type: 'SET_PACKS' , payload: responsePayload.data.equipment});
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* getPacks() {
    yield takeEvery('GET_PACKS', getEquipApi);
}

export default getPacks;