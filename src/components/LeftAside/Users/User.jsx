import { NavLink } from "react-router-dom";
import { createDialogId } from "../../../redux/dialogsReducer";
import UserPhoto from "../../Common/UserPhoto";
import styled from "styled-components";

const WrapperUser = styled.div`
  & > * {
    text-decoration: none;
    color: var(--color-text);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--mr-xs);
    padding: var(--pd-sm);
    font-size: var(--fs-sm);
    border-radius: var(--radius-sm);
    transition: var(--tr-fast);
    &:hover:not(.active-link) {
      background-color: var(--color-aditional);
    }
    .name_block {
      width: 70%;
      margin-left: var(--mr-sm);
      overflow: hidden;
    }
  }
`;

const User = ({
  user,
  authUser,
  addNewDialog,
  addContactId,
  setStateLeftAside,
  addNewChat,
}) => {
  let authUserInfo = {
    firstName: authUser.profile.firstName,
    lastName: authUser.profile.lastName,
    photo: authUser.profile.photo,
  };
  let userInfo = {
    firstName: user.profile.firstName,
    lastName: user.profile.lastName,
    photo: user.profile.photo,
  };
  return (
    <WrapperUser>
      <NavLink
        to={`/dialog/${user.idUser}`}
        onClick={() => {
          // Создаем новый диалог на основе авторизованного пользователя
          addNewDialog(authUser.idUser, authUserInfo, user.idUser, userInfo);
          addContactId(authUser.idUser, user.idUser);
          addNewChat(createDialogId, user.idUser);
          addNewChat(createDialogId, authUser.idUser);
          setStateLeftAside("dialogs");
        }}
      >
        <div>
          <UserPhoto
            photo={user.profile.photo}
            firstName={user.profile.firstName}
            lastName={user.profile.lastName}
          />
        </div>
        <div className="name_block">
          <div>{user.profile.firstName + " " + user.profile.lastName}</div>
        </div>
      </NavLink>
    </WrapperUser>
  );
};
export default User;
