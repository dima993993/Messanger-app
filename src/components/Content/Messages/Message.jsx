import styled from "styled-components";

const WrapperMessage = styled.div`
  max-width: 100%;

  & > div {
    max-width: 60%;
    display: flex;
    align-items: center;
    border-radius: var(--radius-lg);
    font-size: var(--fs-sm);
    padding: var(--pd-sm);
    margin: var(--mr-sm) 0;
    background-color: ${(props) =>
      props.idUser === props.authUserId
        ? "var(--color-your-messege)"
        : "var(--color-basic)"};
    float: ${(props) => (props.idUser === props.authUserId ? "right" : "left")};
    clear: both;
  }
  .date {
    font-size: 8px;
    color: var(--color-text-sub);
  }
  .date_left {
    margin-left: var(--mr-xs);
  }
  .date_right {
    margin-right: var(--mr-xs);
  }
`;

const Message = ({ message, authUserId }) => {
  return (
    <WrapperMessage idUser={message.idUser} authUserId={authUserId}>
      <div>
        {message.idUser === authUserId ? (
          <div className='date date_right'>
            {message.date.getHours() + ":" + message.date.getMinutes()}
          </div>
        ) : (
          ""
        )}
        <div>{message.message}</div>
        {message.idUser !== authUserId ? (
          <div className='date date_left'>
            {message.date.getHours() + ":" + message.date.getMinutes()}
          </div>
        ) : (
          ""
        )}
      </div>
    </WrapperMessage>
  );
};

export default Message;
