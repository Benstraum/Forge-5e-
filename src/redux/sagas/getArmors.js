import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* getEquipApi() {
    try {
        const responsePayload = yield axios.get(`https://www.dnd5eapi.co/api/equipment-categories/armor`);
        yield put({ type: 'SET_ARMORS' , payload: responsePayload.data.equipment});
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* getArmors() {
    yield takeEvery('GET_ARMORS', getEquipApi);
}

export default getArmors;