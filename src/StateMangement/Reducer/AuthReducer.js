const initialState = {
  isProcessing: false,
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "apiBegun":
      return { ...state, isProcessing: true };
    case "apiReset":
      return { ...state, isProcessing: false };

    default:
      return state;
  }
};

export default AuthReducer;
