const symptomsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SYMPTOMS':
      return action.payload;
    default:
      return state;
  }
};

export default symptomsReducer;
