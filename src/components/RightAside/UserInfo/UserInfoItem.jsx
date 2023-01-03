import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
const WrapperUserInfoItem = styled.div`
  display: flex;
  align-items: center;
  padding: var(--pd-md);
  .icon_block {
    color: var(--color-icon);
  }
  .text_block {
    margin-left: var(--mr-md);
    font-size: var(--fs-md);

    & > div:last-child {
      font-size: var(--fs-sm);
      color: var(--color-text-sub);
      margin-top: var(--mr-xs);
    }
  }
`;

const UserInfoItem = ({ profileText, nameItem, icon }) => {
  if (!profileText) return null;
  return (
    <WrapperUserInfoItem>
      <div className='icon_block'>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className='text_block'>
        <div>{profileText}</div>
        <div>{nameItem}</div>
      </div>
    </WrapperUserInfoItem>
  );
};
export default UserInfoItem;
