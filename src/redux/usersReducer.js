import users from "./../server/users";

const USER_AUTHORIZATION = "USER_AUTHORIZATION";

const getAuthUser = localStorage.getItem("authUser");
const authUser = JSON.parse(getAuthUser);

const initialState = {
  users: users,
  authorizedUser: authUser ? authUser : [],
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
export default usersReducer;
