const equipmentChoiceRouter = (state = [], action) => {
    switch (action.type) {
        case 'SET_CHOICES':
            console.log(action.payload[0])
            return action.payload[0] ;
        default:
            return state;
    };
};

export default equipmentChoiceRouter