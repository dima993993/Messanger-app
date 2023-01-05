import messages from "../server/messages";

const COMBINE_MESSAGE = "COMBINE_MESSAGE";
const CHANGE_TEXT_VALUE_MESSAGE = "CHANGE_TEXT_VALUE_MESSAGE";
const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
const NEW_CHAT = "NEW_CHAT";

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
      ); // Ищем два обьекта с сообщениями, в одном диалоге по id
      let unitMessageTwoUsers = [
        ...filterMessage[0].messages,
        ...filterMessage[1].messages,
      ]; // Обьединяем сообщения первого пользователя и второго в один массив
      let sortMessage = unitMessageTwoUsers.sort((a, b) => a.date - b.date); // Сортируем сообщения по дате
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
      ); // Находим нужный обьект с сообщениями для авторизованного пользователя
      let searchIndexMessage = state.messages.findIndex(
        (message) =>
          message.idDialog === action.idDialog &&
          message.idUser === action.idUser
      ); // Находим нужный индекс обьекта с сообщениями для авторизованного пользователя
      let newMessage = {
        idUser: action.idUser,
        date: new Date(),
        message: action.message,
      }; // Создаем обьект с новым сообщением
      let objectMessage = [...currentDialog[0].messages, newMessage]; // Копируем массив обьектов старых сообщений и добавляем новый обьект в массив
      let objectDialogMessage = {
        idDialog: action.idDialog,
        idUser: action.idUser,
        messages: objectMessage,
      }; // Создаем обьект с id и добавляем в него обьект со старыми и новым сообщением
      let copyMessages = [...state.messages]; // Создаем копию массива обьектов с сообщениями
      copyMessages.splice(searchIndexMessage, 1, objectDialogMessage); // Удаляем старую версию обьекта с сообщением и на ее место вставляем обьект с новым сообщением

      return {
        ...state,
        messages: copyMessages,
      };
    case NEW_CHAT:
      let newChats = {
        idDialog: action.idDialog,
        idUser: action.idUser,
        messages: [],
      };
      return {
        ...state,
        messages: [...state.messages, newChats],
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
export const addNewChat = (idDialog, idUser) => ({
  type: NEW_CHAT,
  idDialog,
  idUser,
});

export default messagesReducer;
