// make cases for martial & simple weapons, armor and shields. make state an object with arrays inside.
const skillDefinition = (state='', action) =>{
    switch (action.type) {
        case 'SET_DEFINITION':
            return action.payload;
        default:
            return state;
    };
}

export default  skillDefinition;