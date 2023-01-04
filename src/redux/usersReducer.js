import users from "./../server/users";

const USER_AUTHORIZATION = "USER_AUTHORIZATION";
const LOG_OUT = "LOG_OUT";
const CHOOSE_CURRENT_USER = "CHOOSE_CURRENT_USER";

const getAuthUser = localStorage.getItem("authUser");
const authUser = JSON.parse(getAuthUser);

const initialState = {
  users: users,
  authorizedUser: authUser ? authUser : [],
  currentUser: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTHORIZATION:
      let checkUser = state.users.filter(
        (user) =>
          user.authorization.login === action.login &&
          user.authorization.password === action.password
      ); // Ищем пользователя с заданым логином и паролем
      localStorage.setItem("authUser", JSON.stringify(checkUser));
      return {
        ...state,
        authorizedUser: checkUser,
      };
    case CHOOSE_CURRENT_USER:
      let findCurrentUser = state.users.filter(
        (user) => user.idUser === action.idUser
      );
      return {
        ...state,
        currentUser: findCurrentUser,
      };
    case LOG_OUT: {
      localStorage.setItem("authUser", JSON.stringify([]));
      return {
        ...state,
        authorizedUser: [],
      };
    }
    default:
      return state;
  }
};

// Action Creators

export const authorization = (login, password) => ({
  type: USER_AUTHORIZATION,
  login,
  password,
});
export const chooseCurrentUser = (idUser) => ({
  type: CHOOSE_CURRENT_USER,
  idUser,
});
export const logOut = () => ({ type: LOG_OUT });
export default usersReducer;
