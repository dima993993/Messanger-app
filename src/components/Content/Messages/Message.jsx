import styled from "styled-components";

const WrapperMessage = styled.div`
  max-width: 100%;
  & > div {
    max-width: 60%;
    display: flex;
    align-items: center;
    border-radius: ${(props) =>
      props.myMessage
        ? "var(--radius-lg) var(--radius-lg) var(--radius-xs) var(--radius-lg)"
        : "var(--radius-lg) var(--radius-lg) var(--radius-lg) var(--radius-xs)"};
    font-size: var(--fs-md);
    padding: var(--pd-sm);
    margin: var(--mr-sm) 0;
    background-color: ${(props) =>
      props.myMessage ? "var(--color-your-messege)" : "var(--color-basic)"};
    float: ${(props) => (props.myMessage ? "right" : "left")};
    clear: both;
  }
  .message {
    order: 2;
  }
  .date {
    font-size: 10px;
    color: var(--color-text-sub);
    order: ${(props) => (props.myMessage ? 1 : 3)};
    margin-left: ${(props) => (props.myMessage ? 0 : "var(--mr-xs)")};
    margin-right: ${(props) => (props.myMessage ? "var(--mr-xs)" : 0)};
  }
`;

const Message = ({ message, authUserId }) => {
  let myMessage = message.idUser === authUserId;
  let date = message.date.getHours() + ":" + message.date.getMinutes();
  return (
    <WrapperMessage myMessage={myMessage} date={date}>
      <div>
        <div className='message'>{message.message}</div>
        <div className='date'>{date}</div>
      </div>
    </WrapperMessage>
  );
};

export default Message;
