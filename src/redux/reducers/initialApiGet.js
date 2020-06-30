// make cases for martial & simple weapons, armor and shields. make state an object with arrays inside.
const initialApiGet = (state = { armors: [], shields: {}, martial: [], simple: [], packs: [] }, action) => {
    switch (action.type) {
        case 'SET_PACKS':
            state.packs = action.payload
            return state;
        case 'SET_ARMORS':
            state.armors = action.payload
            return state;
        case 'SET_SHIELDS':
            state.shields = action.payload
            return state;
        case 'SET_MARTIALS':
            state.martial = action.payload
            return state;
        case 'SET_SIMPLES':
            state.simple = action.payload
            return state;
        default:
            return state;
    };
}

export default initialApiGet