import styled from "styled-components";

const WrapperPhotoBlock = styled.div`
  overflow: hidden;
  .image_block {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--width-aside);
    background-color: ${(props) => (props.photo !== "" ? "" : "#ffeaa7")};
    background-image: ${(props) =>
      props.photo !== "" ? `url(${props.photo})` : ""};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(125, 125, 125, 0.3) 80%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    .name_block {
      position: absolute;
      bottom: 20px;
      left: 20px;
      z-index: 20;
    }
    .symbols_name {
      color: var(--color-text);
      font-size: calc(var(--width-aside) - 100px);
      font-weight: var(--fw-middle);
      z-index: 30;
    }
  }
`;

const PhotoBlock = ({ photo, firstName, lastName }) => {
  return (
    <WrapperPhotoBlock photo={photo}>
      <div className='image_block'>
        <div className='name_block'>{firstName + " " + lastName}</div>
        {!photo ? (
          <div className='symbols_name'>{firstName[0] + lastName[0]}</div>
        ) : (
          ""
        )}
      </div>
    </WrapperPhotoBlock>
  );
};

export default PhotoBlock;
