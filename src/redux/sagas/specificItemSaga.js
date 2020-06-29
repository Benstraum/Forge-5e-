import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_ITEMS" actions
function* getSpecifiedItem(action) {
    try {
        const response = yield axios.get(`https://www.dnd5eapi.co${action.payload}`);
        yield put({ type: 'SET_EQUIP', payload: response.data });
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* specificItemSaga() {
    yield takeLatest('FETCH_ITEMS', getSpecifiedItem);
}

export default specificItemSaga;