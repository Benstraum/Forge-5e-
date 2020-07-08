import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import specificItemSaga from './specificItemSaga' // uses url to find details on specific item
import getAllCharacters from './GetAllCharacters' //home page all char get
import getAllRaces from './racesSaga' // gets list of races
import classSaga from './classSaga' // get all classes
import getArmors from './getArmors' //gets items from dnd5e api
import getMartials from './getMartials'
import getPacks from './getPacks'
import getSimples from './getSimples'
import getChoices from './equipmentChoice' //class based equipment choices 
import getSkillDef from './skillDefinitionSaga' //gets specific skill definition
import finishCharacter from './finishCreationSaga' // this will post new character and route them to main page so they can select their character to view
import deleteSaga from './deleteCharacter' //deletes character from db. can only delete chars they see
import PutSaga from './PutSaga' //put request to change name saga
import allSkillsSaga from './allSkillsSaga'
import updateStatSaga from './UpdateStatSaga'
import allSpellSaga from './allSpellSaga'

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
    getArmors(),
    getAllCharacters(),
    getAllRaces(),
    classSaga(),
    getArmors(),
    getMartials(),
    getPacks(),
    getSimples(),
    getChoices(),
    getSkillDef(),
    finishCharacter(),
    deleteSaga(),
    PutSaga(),
    allSkillsSaga(),
    updateStatSaga(),
    allSpellSaga()
    



  ]);
}
