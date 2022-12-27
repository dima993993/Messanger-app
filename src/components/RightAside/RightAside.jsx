import styled from "styled-components";
import HeaderRightAside from "./HeaderRightAside";

const RightAsideWrapper = styled.div`
  background-color: var(--color-basic);
  width: var(--width-aside);
  flex-shrink: 0;
  margin-right: ${(props) => (props.openRightAside ? "0" : "-250px")};
  transition: var(--tr-slow);
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-icon);
  }
`;

export const RightAside = (props) => {
  return (
    <RightAsideWrapper openRightAside={props.openRightAside}>
      <HeaderRightAside closeRightAside={props.setOpenRightAside} />
      <div>Personal Info</div>
    </RightAsideWrapper>
  );
};
