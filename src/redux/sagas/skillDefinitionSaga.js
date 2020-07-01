import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* getEquipApi(action) {
    try {
        const responsePayload = yield axios.get(`/api/character/skill/${action.payload}`);
        yield put({ type: 'SET_DEFINITION' , payload: responsePayload.data[0].description});
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* getSkillDef() {
    yield takeEvery('GET_DEFINITION', getEquipApi);
}

export default getSkillDef;