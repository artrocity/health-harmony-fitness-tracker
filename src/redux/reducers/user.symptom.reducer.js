const userSymptomsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_USER_SYMPTOMS':
      return action.payload;
    default:
      return state;
  }
};

export default userSymptomsReducer;
