import dialogs from "./../server/dialogs";

const CURRENT_DIALOG = "CURRENT_DIALOG";

const initialState = {
  dialogs: dialogs,
  currentDialog: null,
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

export default dialogsReducer;
