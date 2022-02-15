const SET_MESSAGES = 'hello-rails-front-end/message/SET_MESSAGE';

const reducer = (state = '', action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
