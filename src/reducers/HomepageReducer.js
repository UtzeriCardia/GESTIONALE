const initialState = {
  list: [],
  loading: false,
};
const HomepageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        list: payload,
      };
    case "FETCH_LIST_DATA":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_LIST_DATA":
      return state;
    default:
      return state;
  }
};

export default HomepageReducer;
