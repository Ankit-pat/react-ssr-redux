import Axios  from "axios";

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => async dispatch => {
    const res = await Axios.get('https://react-ssr-api.herokuapp.com/users/xss');
    dispatch({type: FETCH_USERS, payload: res.data})
}