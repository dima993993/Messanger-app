import UserPhoto from "../Common/UserPhoto";
import styled from "styled-components";

const HeaderContentWrapper = styled.div`
  width: 100%;
  height: var(--height-header);
  background-color: var(--color-basic);
  display: flex;
  .user {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 20px;
    & > div:last-child {
      margin-left: 10px;
    }
  }
`;

const HeaderContent = ({ setOpenRightAside, userInfo }) => {
  return (
    <HeaderContentWrapper>
      <div className="user" onClick={() => setOpenRightAside(true)}>
        <UserPhoto
          photo={userInfo.photo}
          firstName={userInfo.firstName}
          lastName={userInfo.lastName}
        />

        <div>{userInfo.firstName + " " + userInfo.lastName}</div>
      </div>
      <div className="menu"></div>
    </HeaderContentWrapper>
  );
};
export default HeaderContent;
