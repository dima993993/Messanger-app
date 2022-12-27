import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Search from "../Common/Search";

const WrapperLeftAsideHeader = styled.div`
  height: var(--height-header);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--pd-sm);
  div:first-child {
    width: 15%;
    cursor: pointer;
    color: var(--color-icon);
  }
  div:last-child {
    width: 90%;
  }
`;

const HeaderLeftAside = () => {
  return (
    <WrapperLeftAsideHeader>
      <div>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div>
        <Search />
      </div>
    </WrapperLeftAsideHeader>
  );
};
export default HeaderLeftAside;
