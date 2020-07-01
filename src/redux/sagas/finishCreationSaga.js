import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* getEquipChoices(action) {
    try {
       yield axios.post(`/api/character/create`, action.payload);

        yield put({ type: 'GET_CHARACTERS'  });
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* finishCharacter() {
    yield takeEvery('POST_CHAR', getEquipChoices);
}

export default finishCharacter;