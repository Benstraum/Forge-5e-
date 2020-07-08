import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import itemInfo from './itemInfo' // holds individual item details
import initialApiGet from './initialApiGet' // holds all items in a category
import characterReducer from './characterReducer' // holds all users finished characters
import newCharacterReducer from './newCharacterReducer' //holds information for the new character 
import racesRouter from './racesRouter' // provides list of all races
import classRouter from './classRouter' // provides list of all classes
import equipmentChoiceRouter from './equipmentChoiceReducer' // holds equipment choices for class
import skillDefinition from './skillDefRouter'
import characterSheetReducer from './characterSheetReducer' //sets object for character sheep page
import allSkills from './allSkillReducer' //contais all skills and definitions
import allSpells from './allSpellReducer' //contains all spells and classes assigned to them


// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  itemInfo, // reducer for individual dnd item api
  initialApiGet,
  characterReducer,
  newCharacterReducer,
  racesRouter,
  classRouter,
  equipmentChoiceRouter,
  skillDefinition,
  characterSheetReducer,
  allSkills,
  allSpells
});

export default rootReducer;
