import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* getEquipChoices(action) {
    try {
        const responsePayload = yield axios.get(`/api/character/equipment${action.payload}`);

        yield put({ type: 'SET_CHOICES' , payload: responsePayload.data });
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* getChoices() {
    yield takeEvery('GET_EQUIP_CHOICES', getEquipChoices);
}

export default getChoices;