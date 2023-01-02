import styled from "styled-components";
import PhotoBlock from "./PhotoBlock";
const WrapperUserInfo = styled.div``;
const UserInfo = ({ profile }) => {
  console.log(profile);
  return (
    <WrapperUserInfo>
      <PhotoBlock
        photo={profile.photo}
        firstName={profile.firstName}
        lastName={profile.lastName}
      />
      <div>User Info</div>
    </WrapperUserInfo>
  );
};
export default UserInfo;
