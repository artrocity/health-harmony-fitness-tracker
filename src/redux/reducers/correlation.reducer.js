const correlationReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CORRELATION':
      return action.payload;
    default:
      return state;
  }
};

export default correlationReducer;
