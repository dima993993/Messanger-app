import users from "./../server/users";

const USER_AUTHORIZATION = "USER_AUTHORIZATION";
const LOG_OUT = "LOG_OUT";
const CHOOSE_CURRENT_USER = "CHOOSE_CURRENT_USER";
const ADD_CONTACT_ID = "ADD_CONTACT_ID";

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
    case ADD_CONTACT_ID:
      // let filterAuthUsers = state.users.filter(
      //   (user) => user.idUser === action.authUserId
      // );
      // let authUserIndex = state.users.findIndex(
      //   (user) => user.idUser === action.authUserId
      // );
      // let newContactsIdAuthUser = [
      //   ...filterAuthUsers[0].contactsId,
      //   action.idUser,
      // ];
      // filterAuthUsers[0].contactsId = newContactsIdAuthUser;

      let filterUsers = state.users.filter(
        (user) => user.idUser === action.authUserId
      );
      let userIndex = state.users.findIndex(
        (user) => user.idUser === action.authUserId
      );
      let newContactsId = [...filterUsers[0].contactsId, action.idUser];
      filterUsers[0].contactsId = newContactsId;

      let cloneUsers = [...state.users];
      // cloneUsers.splice(authUserIndex, 1, filterAuthUsers[0]);
      cloneUsers.splice(userIndex, 1, filterUsers[0]);
      return {
        ...state,
        users: cloneUsers,
        authorizedUser: filterUsers,
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
export const chooseCurrentUser = (idUser) => ({
  type: CHOOSE_CURRENT_USER,
  idUser,
});
export const logOut = () => ({ type: LOG_OUT });
export const addContactId = (authUserId, idUser) => ({
  type: ADD_CONTACT_ID,
  authUserId,
  idUser,
});
export default usersReducer;
