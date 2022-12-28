import messages from "../server/messages";

const initialState = {
  messages: messages,
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default messagesReducer;
