import dialogs from "./../server/dialogs";

const CURRENT_DIALOG = "CURRENT_DIALOG";
const CURRENT_DIALOG_USER_INFO = "CURRENT_DIALOG_USER_INFO";
const SEARCH_FIELD_VALUE = "SEARCH_FIELD_VALUE";
const UPDATE_DIALOG = "UPDATE_DIALOG";
const GET_LIST_DIALOGS = "GET_LIST_DIALOGS";

const initialState = {
  dialogs: dialogs,
  currentDialog: null,
  currentDialogUserInfo: null,
  fieldValue: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_DIALOG:
      return {
        ...state,
        currentDialog: action.dialog,
      };
    case CURRENT_DIALOG_USER_INFO:
      return {
        ...state,
        currentDialogUserInfo: action.userInfo,
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
      let copyDialogs = [...state.dialogs];
      let filterDialogs = copyDialogs.filter((dialog) => {
        delete dialog.userInfo[action.authUserId];
        let obj = Object.keys(dialog.userInfo);
        if (obj.length === 1) {
          let newObj = dialog.userInfo[obj[0]];
          dialog.userInfo = newObj;
          return dialog;
        }
      });

      return {
        ...state,
        dialogs: filterDialogs,
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
export const chooseCurrentDialogUserInfo = (userInfo) => ({
  type: CURRENT_DIALOG_USER_INFO,
  userInfo,
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

export default dialogsReducer;
