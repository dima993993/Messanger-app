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

const MessagesContainer = ({ messages, authorizedUser }) => {
  return (
    <MessagesContainerWrapper>
      <div>
        {messages.map((message, index) => {
          return (
            <Message
              key={index}
              message={message}
              authUserId={authorizedUser[0].idUser}
            />
          );
        })}
      </div>
    </MessagesContainerWrapper>
  );
};
export default MessagesContainer;
