import styled from "styled-components";

const WrapperPreloader = styled.div`
  width: 40px;
  height: 40px;
  animation: rotate 1s infinite;
  @keyframes rotate {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }
  & > div {
    width: 10px;
    height: 10px;
    background-color: #000000;
    border-radius: 50%;
  }
`;

const Preloader = () => {
  return (
    <WrapperPreloader>
      <div></div>
    </WrapperPreloader>
  );
};
export default Preloader;
