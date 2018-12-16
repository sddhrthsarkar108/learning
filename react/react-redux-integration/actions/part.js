export const addPart = part => ({
    type: 'ADD_PART',
    payload: part
});

export const deletePart = part => ({
    type: 'DELETE_PART',
    payload: part
});