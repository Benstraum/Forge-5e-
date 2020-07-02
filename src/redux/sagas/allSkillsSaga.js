import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* getSkills() {
    try {
        const responsePayload = yield axios.get(`/api/character/allSkills`);
        yield put({ type: 'SET_ALL_SKILLS' , payload: responsePayload});
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* allSkillsSaga() {
    yield takeEvery('GET_ALL_SKILLS', getSkills);
}

export default allSkillsSaga;