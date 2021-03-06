const SET_MESSAGE = 'hello-rails-front-end/message/SET_MESSAGE';

const reducer = (state = '', action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

const URL = 'http://localhost:3001/api/messages';

export const setMessage = () => async (dispatch) => {
  const resp = await fetch(URL);
  const data = await resp.json();
  dispatch({
    type: SET_MESSAGE,
    payload: data.message,
  });
};

export default reducer;
