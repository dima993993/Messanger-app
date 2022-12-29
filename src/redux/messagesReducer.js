import messages from "../server/messages";

const COMBINE_MESSAGE = "COMBINE_MESSAGE";
const ADD_MESSAGE = "ADD_MESSAGE";

const initialState = {
  messages: messages,
  combineMessage: [],
  messageText: "",
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMBINE_MESSAGE:
      let filterMessage = state.messages.filter(
        (message) => message.idDialog === action.idDialog
      );
      let unitMessageTwoUsers = [
        ...filterMessage[0].messages,
        ...filterMessage[1].messages,
      ];
      let sortMessage = unitMessageTwoUsers.sort((a, b) => a.date - b.date);
      return {
        ...state,
        combineMessage: sortMessage,
      };
    default:
      return state;
  }
};

export const messagesCombine = (idDialog) => ({
  type: COMBINE_MESSAGE,
  idDialog,
});

export default messagesReducer;
