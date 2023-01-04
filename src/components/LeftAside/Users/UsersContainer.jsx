import styled from "styled-components";
import User from "./User";
const WrapperUsersContainer = styled.div``;
const UsersContainer = ({ users, authorizedUser }) => {
  return (
    <WrapperUsersContainer>
      {users.map((user) => (
        <div key={user.idUser}>
          {authorizedUser.idUser !== user.idUser ? (
            <User profile={user.profile} idUser={user.idUser} />
          ) : null}
        </div>
      ))}
    </WrapperUsersContainer>
  );
};
export default UsersContainer;
