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
    /* background-color: ${(props) =>
      props.idUser === props.authorized
        ? "var(--color-your-messege)"
        : "var(--color-icon)"};
    float: ${(props) => (props.idUser === props.authorized ? "right" : "left")};
    clear: both; */
  }
`;

const Message = ({ message }) => {
  return (
    <WrapperMessage>
      <div>
        <div>{message}</div>
      </div>
    </WrapperMessage>
  );
};

export default Message;
