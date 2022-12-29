import dialogs from "./../server/dialogs";

const CURRENT_DIALOG = "CURRENT_DIALOG";
const CURRENT_DIALOG_USER_INFO = "CURRENT_DIALOG_USER_INFO";
const SEARCH_FIELD_VALUE = "SEARCH_FIELD_VALUE";
const RECEIVE_DATA_DIALOG = "RECEIVE_DATA_DIALOG";
const SEARCH_USERS = "SEARCH_USERS";
const FILTER_DIALOGS = "FILTER_DIALOGS";

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
    case RECEIVE_DATA_DIALOG:
      return {
        ...state,
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

export default dialogsReducer;
