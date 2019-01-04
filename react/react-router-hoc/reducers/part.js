const initialState = [];

const parts = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_PART':
            return [...state, action.payload];
        case 'DELETE_PART':
            return [...state.filter(part => part.name!==action.payload.name)];
        // if default is not defined then redux store won't 
        // be populated while creating combined reducer since
        // all the reducer would be called to populate store
        default:
            return state;
    }
}

export default parts;