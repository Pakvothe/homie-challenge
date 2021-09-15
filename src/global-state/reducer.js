const Reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return {
                ...state,
                language: action.payload
            }
        case 'SET_PROFILE':
            return {
                ...state,
                profileId: action.payload
            }
        default: return state;
    };
};

export default Reducer;
