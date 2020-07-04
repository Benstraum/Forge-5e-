const newCharacterReducer = (state={race:'', class:'',  equipment:[], stats:{}, skills:[], name:'', health:''}, action) =>{
    switch(action.type){
        case'NEW_CHARACTER_RACE':
        state.race = action.payload
        return state
        case'NEW_CHARACTER_CLASS':
        state.class = action.payload
        return state
        case'NEW_CHARACTER_FEATURES':
        state.features = action.payload
        return state
        case'NEW_CHARACTER_EQUIPMENT':
        state.equipment = action.payload
        return state
        case'NEW_CHARACTER_STATS':
        state.stats = action.payload
        return state
        case'NEW_CHARACTER_SKILLS':
        state.skills = action.payload
        return state
        case'NEW_CHARACTER_NAME':
        state.name = action.payload
        return state
        case'NEW_CHARACTER_HEALTH':
        state.health = action.payload
        return state
        case'NEW_CHARACTER':
        state = {race:'', class:'', features:[], equipment:[], stats:{}, skills:[], name:'', health:''}
        return state
        default:
            return state
    }
}


  export default newCharacterReducer;
  