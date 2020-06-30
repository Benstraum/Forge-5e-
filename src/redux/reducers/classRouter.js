const classRouter = (state = [], action) => {
    switch (action.type) {
        case 'SET_CLASSES':
            return action.payload.data ;
        default:
            return state;
    };
};

export default classRouter