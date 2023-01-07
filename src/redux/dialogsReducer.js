import dialogs from "./../server/dialogs";

const CURRENT_DIALOG = "CURRENT_DIALOG";
const SEARCH_FIELD_VALUE = "SEARCH_FIELD_VALUE";
const UPDATE_DIALOG = "UPDATE_DIALOG";
const GET_LIST_DIALOGS = "GET_LIST_DIALOGS";
const ADD_NEW_DIALOG = "ADD_NEW_DIALOG";
const SORT_DIALOGS = "SORT_DIALOGS";
const ALERT_NEW_MESSAGE = "ALERT_NEW_MESSAGE";

export let createDialogId = 3000;

const initialState = {
  dialogs: dialogs,
  currentDialog: null,
  fieldValue: "",
  myDialogs: [],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_DIALOG:
      return {
        ...state,
        currentDialog: action.dialog,
      };
    case SEARCH_FIELD_VALUE:
      return {
        ...state,
        fieldValue: action.textValue,
      };
    case UPDATE_DIALOG:
      let searchDialog = state.dialogs.filter(
        (dialog) => dialog.idDialog === action.idDialog
      ); // Ищем нужный диалог по id
      let searchDialogsIndex = state.dialogs.findIndex(
        (dialog) => dialog.idDialog === action.idDialog
      ); // Ищем индекс диалога по id

      searchDialog[0]["lastMessage"] = action.lastMessage; // Изменяем последнее сообщение в диалоге
      searchDialog[0]["date"] = action.date; // Изменяем дату в диалоге
      let cloneDialogs = [...state.dialogs]; // Создаем копию диалогов
      cloneDialogs.splice(searchDialogsIndex, 1, searchDialog[0]); // Удаляем старый диалог, и на его место устанавливаем новый с измененной date и lastMessage
      return {
        ...state,
        dialogs: cloneDialogs,
      };
    case GET_LIST_DIALOGS:
      let copyDialogs = state.dialogs.map((dialog) => {
        return { ...dialog, userInfo: { ...dialog.userInfo } };
      }); // Создание копии с помощью перебора
      let filterDialogs = copyDialogs.filter((dialog) => {
        // Удаляем авторизованного пользователя из обьекта пользователей
        delete dialog.userInfo[action.authUserId];
        // Получаем id не авторизованного пользователя
        let obj = Object.keys(dialog.userInfo);
        // Если пользователей больше одного то диалог не относиться к авторизованному пользователю
        if (obj.length === 1) {
          dialog.userInfo = dialog.userInfo[obj[0]];
          dialog.userInfo.idUser = +obj[0];
          return dialog;
        }
      });
      return {
        ...state,
        myDialogs: filterDialogs,
      };
    case ADD_NEW_DIALOG:
      let newDialog = {
        idDialog: ++createDialogId,
        lastMessage: "",
        date: new Date(),
        userInfo: {},
      };
      newDialog.userInfo[action.idAuthUser] = action.userInfoAuthUser;
      newDialog.userInfo[action.idUser] = action.userInfo;
      return {
        ...state,
        dialogs: [...state.dialogs, newDialog],
      };
    case SORT_DIALOGS:
      // Сортировка срабатывает после отправки сообщения перемещаяя диалог на самый верх
      let sortDialogs = state.myDialogs.sort((a, b) => b.date - a.date);
      let sortAllDialogs = state.dialogs.sort((a, b) => b.date - a.date);
      return {
        ...state,
        diaogs: sortAllDialogs,
        myDialogs: sortDialogs,
      };
    default:
      return state;
  }
};

// Action Creators

export const chooseCurrentDialog = (dialog) => ({
  type: CURRENT_DIALOG,
  dialog,
});

export const searchFieldValue = (textValue) => ({
  type: SEARCH_FIELD_VALUE,
  textValue,
});

export const updateDialogs = (idDialog, lastMessage, date) => ({
  type: UPDATE_DIALOG,
  idDialog,
  lastMessage,
  date,
});
export const getListDialogs = (authUserId) => ({
  type: GET_LIST_DIALOGS,
  authUserId,
});
export const addNewDialog = (
  idAuthUser,
  userInfoAuthUser,
  idUser,
  userInfo
) => ({ type: ADD_NEW_DIALOG, idAuthUser, userInfoAuthUser, idUser, userInfo });

export const sortDialogs = () => ({ type: SORT_DIALOGS });

export default dialogsReducer;
