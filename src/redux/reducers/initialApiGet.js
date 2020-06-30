// make cases for martial & simple weapons, armor and shields. make state an object with arrays inside.
const initialApiGet = (state = [], action) => {
    switch (action.type) {
        case 'SET_API':
            return action.payload;
        default:
            return state;
    };
}

    export default initialApiGet