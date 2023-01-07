import PhotoBlock from "./PhotoBlock";
import UserInfoItem from "./UserInfoItem";
import {
  faPhone,
  faCircleInfo,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const WrapperUserInfo = styled.div``;
const UserInfo = ({ profile }) => {
  return (
    <WrapperUserInfo>
      <PhotoBlock
        photo={profile.photo}
        firstName={profile.firstName}
        lastName={profile.lastName}
      />
      <div>
        <UserInfoItem
          profileText={profile.phone}
          nameItem={"Телефон"}
          icon={faPhone}
        />
        <UserInfoItem
          profileText={profile.nicName}
          nameItem={"Псевдоним"}
          icon={faSignature}
        />
        <UserInfoItem
          profileText={profile.aboutMe}
          nameItem={"О себе"}
          icon={faCircleInfo}
        />
      </div>
    </WrapperUserInfo>
  );
};
export default UserInfo;
