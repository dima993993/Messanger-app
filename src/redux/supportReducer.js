const SWITCH_THEME = "SWITCH-THEME";

const getTheme = localStorage.getItem("theme");

const initialState = {
  theme: getTheme !== null ? getTheme : "light",
};

const supportReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      localStorage.setItem("theme", action.theme);
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
};

// Action Creator
export const switchTheme = (theme) => ({ type: SWITCH_THEME, theme });
export default supportReducer;
