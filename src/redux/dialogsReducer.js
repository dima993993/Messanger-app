import dialogs from "./../server/dialogs";

const CURRENT_DIALOG = "CURRENT_DIALOG";
const CURRENT_DIALOG_USER_INFO = "CURRENT_DIALOG_USER_INFO";

const initialState = {
  dialogs: dialogs,
  currentDialog: null,
  currentDialogUserInfo: null,
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

export default dialogsReducer;
