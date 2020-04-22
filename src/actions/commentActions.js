import jsonPlaceholder from "../api/jsonPlaceholder";
import { GET_COMMENTS, LOADING } from "../constants";

export const getComments = (postId) => async (dispatch) => {
  dispatch({ type: LOADING });
  const { data } = await jsonPlaceholder.get(`/comments?postId=${postId}`);
  dispatch({ type: GET_COMMENTS, payload: data });
};
