// make cases for martial & simple weapons, armor and shields. make state an object with arrays inside.
const itemInfo = (state=[], action) =>{
    switch (action.type) {
        case 'SET_EQUIP':
            return action.payload;
        default:
            return state;
    };
}

export default  itemInfo;