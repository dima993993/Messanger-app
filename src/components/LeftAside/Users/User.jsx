import { NavLink } from "react-router-dom";
import styled from "styled-components";
import UserPhoto from "../../Common/UserPhoto";
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

const User = ({ profile, idUser }) => {
  return (
    <WrapperUser>
      <NavLink to={`/dialog/${idUser}`}>
        <div>
          <UserPhoto
            photo={profile.photo}
            firstName={profile.firstName}
            lastName={profile.lastName}
          />
        </div>
        <div className='name_block'>
          <div>{profile.firstName + " " + profile.lastName}</div>
        </div>
      </NavLink>
    </WrapperUser>
  );
};
export default User;
