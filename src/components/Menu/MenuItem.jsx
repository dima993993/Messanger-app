import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const WrapperMenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: var(--mr-xs);
  padding: var(--pd-sm) var(--pd-md);
  cursor: pointer;
  transition: var(--tr-fast);
  font-size: var(--fs-sm);
  &:hover {
    background-color: var(--color-aditional);
  }
  & > div:first-child {
    color: var(--color-icon);
  }
  & > div:last-child {
    margin-left: var(--mr-sm);
  }
`;

const MenuItem = ({ nameItem, icon }) => {
  return (
    <WrapperMenuItem>
      <div>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>{nameItem}</div>
    </WrapperMenuItem>
  );
};

export default MenuItem;
