import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* changeName(action) {
    console.log(action.payload)
    try {
        yield axios.put(`/api/character/${action.payload.id}`, action.payload);
        yield put({ type: 'GET_CHARACTERS'});
    } catch (error) {
        console.log('put saga request failed', error);
    }
}

function* changePic(action) {
    try {
        yield axios.put(`/api/character/portrait/${action.payload.id}`, action.payload);
        yield put({ type: 'GET_CHARACTERS'});
    } catch (error) {
        console.log('put saga request failed', error);
    }
}

function* PutSaga() {
    yield takeEvery('CHANGE_NAME', changeName);
    yield takeEvery('CHANGE_PIC', changePic)
}

export default PutSaga;