//actions type
const SET_USER = "SET_USER";

// actions creator function that return an object that contain the action

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const initialState = {
  user: undefined,
};

// reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
export default counterReducer;
