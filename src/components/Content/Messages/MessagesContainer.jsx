import styled from "styled-components";
import Message from "./Message";

const MessagesContainerWrapper = styled.div`
  width: 100%;
  height: var(--content-height);
  margin: 0 auto;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }
  & > div {
    width: 70%;
    margin: 0 auto;
  }
`;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const MessagesContainer = ({ messages }) => {
  return (
    <MessagesContainerWrapper>
      <div>
        {arr.map((message, index) => {
          return <Message key={index} message={message} />;
        })}
      </div>
    </MessagesContainerWrapper>
  );
};
export default MessagesContainer;
