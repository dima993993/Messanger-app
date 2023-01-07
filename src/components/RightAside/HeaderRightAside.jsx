import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const RightPanelHeaderWrapper = styled.div`
  height: var(--height-header);
  display: flex;
  align-items: center;
  padding: 0 10px;
  .close_icon {
    cursor: pointer;
    color: var(--color-icon);
  }
  .edit_icon {
    cursor: pointer;
    font-size: var(--fs-sm);
    color: var(--color-icon);
  }
  .title {
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
    margin-left: var(--mr-lg);
  }
`;

const HeaderRightAside = ({ closeRightAside }) => {
  return (
    <RightPanelHeaderWrapper>
      <div className='close_icon' onClick={() => closeRightAside(false)}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className='title'>Information</div>
    </RightPanelHeaderWrapper>
  );
};
export default HeaderRightAside;
