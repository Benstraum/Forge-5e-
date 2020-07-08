// make cases for martial & simple weapons, armor and shields. make state an object with arrays inside.
const allSpells = (state=[], action) =>{
    switch (action.type) {
        case 'SET_ALL_SPELLS':
            return action.payload.data;
        default:
            return state;
    };
}

export default  allSpells;