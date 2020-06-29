const racesRouter = (state = [], action) => {
    switch (action.type) {
        case 'SET_RACES':
            return action.payload.data ;
        default:
            return state;
    };
};

export default racesRouter