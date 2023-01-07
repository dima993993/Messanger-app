import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const WrapperMessage = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: var(--mr-bottom);
  left: 15%;
  input {
    width: 90%;
    height: var(--height-elem);
    outline: none;
    border: none;
    border-radius: var(--radius-item) 0 0 var(--radius-item);
    padding-left: var(--pd-sm);
    background-color: var(--color-basic);
    box-sizing: border-box;
    color: var(--color-text);
  }
  .icon {
    width: 10%;
    background-color: var(--color-basic);
    border-radius: 0 var(--radius-item) var(--radius-item) 0;
    height: var(--height-elem);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: var(--color-icon);
  }
`;

const EnterMessege = ({
  messageTextValue,
  changeValue,
  addNewMessage,
  idAuthUser,
  idDialog,
  messagesCombine,
  updateDialogs,
  getListDialogs,
  sortDialogs,
}) => {
  let sendMessage = () => {
    if (messageTextValue !== "") {
      addNewMessage(idDialog, idAuthUser, messageTextValue);
      messagesCombine(idDialog);
      updateDialogs(idDialog, messageTextValue, new Date());
      getListDialogs(idAuthUser);
      sortDialogs();
      changeValue("");
    }
  };
  return (
    <WrapperMessage>
      <input
        type='text'
        placeholder='Enter Message'
        value={messageTextValue}
        onChange={(e) => changeValue(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? sendMessage() : null)}
      />
      <div className='icon' onClick={() => sendMessage()}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
    </WrapperMessage>
  );
};

export default EnterMessege;
