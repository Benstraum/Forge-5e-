// make cases for martial & simple weapons, armor and shields. make state an object with arrays inside.
const getItemReducer = (state=[], action) =>{
    if(action.type === 'SET_EQUIP'){
        return action.payload
    }
    return state
}

export default  getItemReducer;