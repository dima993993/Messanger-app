import styled from "styled-components";

const WrapperUserPhoto = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 50%;
  img {
    width: 100%;
  }
`;

const UserPhoto = () => {
  return (
    <WrapperUserPhoto>
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="User"
      />
    </WrapperUserPhoto>
  );
};
export default UserPhoto;
