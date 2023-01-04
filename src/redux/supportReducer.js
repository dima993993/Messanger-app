const SWITCH_THEME = "SWITCH-THEME";
const SWITCH_LEFT_ASIDE = "SWITCH_LEFT_ASIDE";

const getTheme = localStorage.getItem("theme");

const initialState = {
  theme: getTheme !== null ? getTheme : "light",
  stateLeftAside: "dialogs",
};

const supportReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      localStorage.setItem("theme", action.theme);
      return {
        ...state,
        theme: action.theme,
      };
    case SWITCH_LEFT_ASIDE:
      return {
        ...state,
        stateLeftAside: action.condition,
      };
    default:
      return state;
  }
};

// Action Creator
export const switchTheme = (theme) => ({ type: SWITCH_THEME, theme });
export const setStateLeftAside = (condition) => ({
  type: SWITCH_LEFT_ASIDE,
  condition,
});
export default supportReducer;
