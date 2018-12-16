const initialState = {
    parts: []
};

const parts = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_PART':
            return {
                ...state,
                parts: [...state.parts, action.part]
            }
        case 'DELETE_PART':
            const parts = state.parts.filter(part => part.name!==action.part.name);
            return {
                ...state,
                parts
            }
        // if default is not defined then redux store won't 
        // be populated while creating combined reducer since
        // all the reducer would be called to populate store
        default:
            return state;
    }
}

export default parts;