import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const EnterMessege = () => {
  return (
    <WrapperMessage>
      <input type="text" placeholder="Enter Message" />
      <div className="icon">
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
    </WrapperMessage>
  );
};

export default EnterMessege;
