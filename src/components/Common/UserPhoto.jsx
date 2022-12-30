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
  .no_photo {
    width: 100%;
    height: 100%;
    background-color: #378edb;
    font-weight: var(--fw-bold);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const UserPhoto = ({ photo, firstName, lastName }) => {
  return (
    <WrapperUserPhoto>
      {photo ? (
        <img src={photo} alt={firstName + " " + lastName} />
      ) : (
        <div className='no_photo'>
          <span>{firstName[0] + lastName[0]}</span>
        </div>
      )}
    </WrapperUserPhoto>
  );
};
export default UserPhoto;
