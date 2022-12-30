import dialogs from "./../server/dialogs";

const CURRENT_DIALOG = "CURRENT_DIALOG";
const CURRENT_DIALOG_USER_INFO = "CURRENT_DIALOG_USER_INFO";
const SEARCH_FIELD_VALUE = "SEARCH_FIELD_VALUE";
const UPDATE_DIALOG = "UPDATE_DIALOG";

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
      );
      let searchDialogsIndex = state.dialogs.findIndex(
        (dialog) => dialog.idDialog === action.idDialog
      );

      searchDialog[0]["lastMessage"] = action.lastMessage;
      searchDialog[0]["date"] = action.date;
      let cloneDialogs = [...state.dialogs];
      cloneDialogs.splice(searchDialogsIndex, 1, searchDialog[0]);
      return {
        ...state,
        dialogs: cloneDialogs,
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

export default dialogsReducer;
