import styled from "styled-components";
import Dialog from "./Dialog";
import HeaderLeftAside from "./HeaderLeftAside";

let arr = [
  "Dima Pupkin",
  "Vasya Golovanov",
  "Jeka Miheev",
  "Nikolay Starokozatskiya",
];

const LeftAsideWrapper = styled.div`
  background-color: var(--color-basic);
  width: var(--width-aside);
  flex-shrink: 0;
  transition: var(--tr-slow);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-icon);
  }
`;
const DialogsContainer = styled.div`
  margin: var(--mr-md) var(--mr-xs);
`;

export const LeftAside = () => {
  return (
    <LeftAsideWrapper>
      <HeaderLeftAside />
      <DialogsContainer>
        {arr.map((dialog, index) => {
          return <Dialog key={index} text={dialog} id={index} />;
        })}
      </DialogsContainer>
    </LeftAsideWrapper>
  );
};
