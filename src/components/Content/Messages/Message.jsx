import styled from "styled-components";

const WrapperMessage = styled.div`
  max-width: 100%;

  & > div {
    max-width: 80%;
    display: inline-block;
    border-radius: var(--radius-lg);
    font-size: var(--fs-sm);
    padding: var(--pd-sm);
    margin: var(--mr-sm) 0;
    background-color: ${(props) =>
      props.idUser === props.authUserId
        ? "var(--color-your-messege)"
        : "var(--color-icon)"};
    float: ${(props) => (props.idUser === props.authUserId ? "right" : "left")};
    clear: both;
  }
`;

const Message = ({ message, authUserId }) => {
  console.log(message.idUser);
  console.log(authUserId);
  return (
    <WrapperMessage idUser={message.idUser} authUserId={authUserId}>
      <div>
        <div>{message.message}</div>
      </div>
    </WrapperMessage>
  );
};

export default Message;
