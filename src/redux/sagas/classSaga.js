import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* getClasses() {
    try {
        const responsePayload = yield axios.get(`/api/character/classes`);
        console.log('in class router', responsePayload.data)
        yield put({ type: 'SET_CLASSES' , payload: responsePayload});
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* classSaga() {
    yield takeEvery('GET_CLASSES', getClasses);
}

export default classSaga;