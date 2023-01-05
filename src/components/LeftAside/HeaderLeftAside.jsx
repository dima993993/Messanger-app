import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Search from "../Common/Search";

const WrapperLeftAsideHeader = styled.div`
  height: var(--height-header);
  display: flex;
  align-items: center;
  padding: 0 var(--pd-sm);
  & > div:first-child {
    width: 15%;
    cursor: pointer;
    color: var(--color-icon);
  }
  div:last-child {
    width: 90%;
  }
`;

const HeaderLeftAside = ({
  searchFieldValue,
  fieldValue,
  setOpenMenu,
  stateLeftAside,
  setStateLeftAside,
}) => {
  return (
    <WrapperLeftAsideHeader>
      {stateLeftAside !== "dialogs" ? (
        <div onClick={() => setStateLeftAside("dialogs")}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      ) : (
        <div onClick={() => setOpenMenu(true)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      )}
      <div>
        <Search searchFieldValue={searchFieldValue} fieldValue={fieldValue} />
      </div>
    </WrapperLeftAsideHeader>
  );
};
export default HeaderLeftAside;
