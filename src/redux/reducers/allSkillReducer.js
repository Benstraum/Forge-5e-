// make cases for martial & simple weapons, armor and shields. make state an object with arrays inside.
const allSkills = (state=[], action) =>{
    switch (action.type) {
        case 'SET_ALL_SKILLS':
            return action.payload.data;
        default:
            return state;
    };
}

export default  allSkills;