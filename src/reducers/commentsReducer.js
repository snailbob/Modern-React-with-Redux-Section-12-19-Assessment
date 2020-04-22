import { GET_COMMENTS, LOADING } from "../constants";

const initialState = {
  data: [],
  isLoading: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COMMENTS:
      return { ...state, data: payload, isLoading: false };
    case LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
