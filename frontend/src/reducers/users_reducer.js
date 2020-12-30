export const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    default:
      return nextState;
  }
};

export default usersReducer;