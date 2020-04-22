import { GET_POSTS, CREATE_POST, DELETE_POST, LOADING } from "../constants";

const initialState = {
  data: [],
  isLoading: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return { ...state, data: payload, isLoading: false };
    case CREATE_POST:
      const copy = state.data.filter((post) => post.id !== payload.id);
      return {
        ...state,
        data: [...copy, payload],
        isLoading: false,
      };
    case DELETE_POST:
      const { id } = payload;
      return {
        ...state,
        data: state.data.filter((post) => post.id !== id),
        isLoading: false,
      };
    case LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
