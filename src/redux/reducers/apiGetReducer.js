// make cases for martial & simple weapons, armor and shields. make state an object with arrays inside.
const apiGetReducer = (state = [], action) => {
    console.log('in getListReducer', action.payload);

    if (action.type === 'SET_API') {
        return action.payload;
    }
    return state;
};

export default apiGetReducer