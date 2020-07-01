const characterSheetReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CHAR_SHEET':
            return action.payload;
        case 'RETRIEVE_SHEET':
            return state;
        default:
            return state;
    };
};

export default characterSheetReducer