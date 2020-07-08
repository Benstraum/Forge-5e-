import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* getSpells() {
    try {
        const responsePayload = yield axios.get(`/api/character/allSpells`);
        yield put({ type: 'SET_ALL_SPELLS' , payload: responsePayload});
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* allSpellSaga() {
    yield takeEvery('GET_ALL_SPELLS', getSpells);
}

export default allSpellSaga;