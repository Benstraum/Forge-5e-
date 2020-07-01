import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* deleteChar(action) {
    try {
        yield axios.delete(`/api/character/${action.payload}`);
        yield put({ type: 'GET_CHARACTERS' });
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* deleteSaga() {
    yield takeEvery('DELETE_CHARACTER', deleteChar);
}

export default deleteSaga;