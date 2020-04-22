import jsonPlaceholder from "../api/jsonPlaceholder";
import { GET_POSTS, CREATE_POST, DELETE_POST, LOADING } from "../constants";

export const getPosts = (userId) => async (dispatch) => {
  dispatch({ type: LOADING });
  const { data } = await jsonPlaceholder.get(`/posts?userId=${userId}`);
  dispatch({ type: GET_POSTS, payload: data });
};

export const deletePost = (postId) => async (dispatch) => {
  dispatch({ type: LOADING });
  await jsonPlaceholder.delete(`/posts/${postId}`);
  dispatch({ type: DELETE_POST, payload: { id: postId } });
};

export const addPost = (userId, title, body) => async (dispatch) => {
  dispatch({ type: LOADING });
  const { data } = await jsonPlaceholder.post("/posts", {
    userId,
    title,
    body,
  });
  dispatch({ type: CREATE_POST, payload: data });
};
