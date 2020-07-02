import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* getUserChar() {
    try {
        const responsePayload = yield axios.get(`/api/character`);
        yield put({ type: 'SET_CHARACTERS' , payload: responsePayload.data});
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* getAllCharacters() {
    yield takeEvery('GET_CHARACTERS', getUserChar);
}

export default getAllCharacters;