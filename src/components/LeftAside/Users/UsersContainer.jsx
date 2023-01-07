import User from "./User";
import styled from "styled-components";

const WrapperUsersContainer = styled.div``;
const UsersContainer = ({
  users,
  authorizedUser,
  addNewDialog,
  addContactId,
  setStateLeftAside,
  addNewChat,
  currentDialog,
  idCurrentDialog,
}) => {
  return (
    <WrapperUsersContainer>
      {users.map((user) => (
        <div key={user.idUser}>
          {authorizedUser.idUser !== user.idUser &&
          !authorizedUser.contactsId.includes(user.idUser) ? (
            <User
              user={user}
              authUser={authorizedUser}
              addNewDialog={addNewDialog}
              addContactId={addContactId}
              setStateLeftAside={setStateLeftAside}
              addNewChat={addNewChat}
              currentDialog={currentDialog}
              idCurrentDialog={idCurrentDialog}
            />
          ) : null}
        </div>
      ))}
    </WrapperUsersContainer>
  );
};
export default UsersContainer;
