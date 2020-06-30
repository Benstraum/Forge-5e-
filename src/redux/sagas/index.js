import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import specificItemSaga from './specificItemSaga' // uses url to find details on specific item
import getAllEquipApi from './getAllEquipApi' //gets items from dnd5e api
import getAllCharacters from './GetAllCharacters' //home page all char get
import getAllRaces from './racesSaga' // gets list of races
import classSaga from './classSaga' // get all classes

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    specificItemSaga(),
    getAllEquipApi(),
    getAllCharacters(),
    getAllRaces(),
    classSaga()

  ]);
}
