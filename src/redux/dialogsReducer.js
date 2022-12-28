import dialogs from "./../server/dialogs";

const CURRENT_DIALOG = "CURRENT_DIALOG";
const CURRENT_DIALOG_USER = "CURRENT_DIALOG_USER";

const initialState = {
  dialogs: dialogs,
  currentDialog: null,
  currentDialogUser: null,
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_DIALOG:
      return {
        ...state,
        currentDialog: action.dialog,
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
export const chooseCurrentDialogUser = (idUser) => ({
  type: CURRENT_DIALOG_USER,
  idUser,
});

export default dialogsReducer;
