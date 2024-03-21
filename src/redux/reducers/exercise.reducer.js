const exerciseReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_USER_EXERCISE':
      return action.payload;
    default:
      return state;
  }
};

export default exerciseReducer;
