const initialState = {
  list: [],
  activeID: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOBBY": {
      return state;
    }

    case "SET_ACTIVE_HOBBY": {
      return state;
    }

    default:
      return state;
  }
};

export default userReducer;
