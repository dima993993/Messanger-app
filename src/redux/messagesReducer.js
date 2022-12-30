import messages from "../server/messages";

const COMBINE_MESSAGE = "COMBINE_MESSAGE";
const CHANGE_TEXT_VALUE_MESSAGE = "CHANGE_TEXT_VALUE_MESSAGE";
const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";

const initialState = {
  messages: messages,
  combineMessage: [],
  messageTextValue: "",
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
    case CHANGE_TEXT_VALUE_MESSAGE:
      return {
        ...state,
        messageTextValue: action.text,
      };
    case ADD_NEW_MESSAGE:
      let currentDialog = state.messages.filter(
        (message) =>
          message.idDialog === action.idDialog &&
          message.idUser === action.idUser
      );
      let searchIndexMessage = state.messages.findIndex(
        (message) =>
          message.idDialog === action.idDialog &&
          message.idUser === action.idUser
      );
      let newMessage = {
        idUser: action.idUser,
        date: new Date(),
        message: action.message,
      };
      let objectMessage = [...currentDialog[0].messages, newMessage];
      let objectDialogMessage = {
        idDialog: action.idDialog,
        idUser: action.idUser,
        messages: objectMessage,
      };
      let copyMessages = [...state.messages];
      copyMessages.splice(searchIndexMessage, 1, objectDialogMessage);

      return {
        ...state,
        messages: copyMessages,
      };

    default:
      return state;
  }
};

export const messagesCombine = (idDialog) => ({
  type: COMBINE_MESSAGE,
  idDialog,
});
export const changeTextValueMessage = (text) => ({
  type: CHANGE_TEXT_VALUE_MESSAGE,
  text,
});
export const addNewMessage = (idDialog, idUser, message) => ({
  type: ADD_NEW_MESSAGE,
  idDialog,
  idUser,
  message,
});

export default messagesReducer;
