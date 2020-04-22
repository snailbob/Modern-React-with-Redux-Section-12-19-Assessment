import jsonPlaceholder from "../api/jsonPlaceholder";
import { GET_USERS } from "../constants";

export const fetchUsers = () => async (dispatch) => {
  const { data } = await jsonPlaceholder.get("/users");
  const payload = data.map((item) => ({
    ...item,
    avatar: `https://ui-avatars.com/api/?name=${item.name}`,
  }));
  dispatch({ type: GET_USERS, payload });
};
