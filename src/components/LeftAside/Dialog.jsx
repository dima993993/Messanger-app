import { NavLink } from "react-router-dom";
import UserPhoto from "./../Common/UserPhoto";
import styled from "styled-components";

const DialogWrapper = styled.div`
  & > * {
    text-decoration: none;
    color: var(--color-text);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--mr-xs);
    padding: var(--pd-sm);
    font-size: var(--fs-sm);
    border-radius: var(--radius-sm);
    transition: var(--tr-fast);
    &:hover:not(.active-link) {
      background-color: var(--color-aditional);
    }
    .name_block {
      width: 70%;
      margin-left: var(--mr-sm);
      overflow: hidden;
      div:last-child {
        color: var(--color-text-sub);
        margin-top: var(--mr-xs);
      }
    }
    .date {
      margin-left: var(--mr-xs);
      color: var(--color-text-sub);
    }
  }
`;

const Dialog = ({
  dialog,
  userInfo,
  date,
  chooseCurrentDialog,
  chooseCurrentDialogUserInfo,
  messagesCombine,
}) => {
  console.log(userInfo);
  return (
    <DialogWrapper>
      <NavLink
        to={`/dialog/${dialog.idDialog}`}
        className={(state) => (state.isActive ? "active-link" : "")}
        onClick={() => {
          chooseCurrentDialog(dialog);
          chooseCurrentDialogUserInfo(userInfo);
          messagesCombine(dialog.idDialog);
        }}
      >
        <div className="photo">
          <UserPhoto
            photo={userInfo.photo}
            firstName={userInfo.firstName}
            lastName={userInfo.lastName}
          />
        </div>
        <div className="name_block">
          <div>{userInfo.firstName + " " + userInfo.lastName}</div>
          <div>{dialog.lastMessage}</div>
        </div>
        <div className="date">{date}</div>
      </NavLink>
    </DialogWrapper>
  );
};
export default Dialog;
