import { connect } from "react-redux";
import { messagesCombine } from "../../redux/messagesReducer";
import {
  chooseCurrentDialog,
  chooseCurrentDialogUserInfo,
  getListDialogs,
  searchFieldValue,
} from "../../redux/dialogsReducer";
import { chooseCurrentUser } from "../../redux/usersReducer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import HeaderLeftAside from "./HeaderLeftAside";
import styled from "styled-components";
import { useEffect } from "react";

const LeftAsideWrapper = styled.div`
  background-color: var(--color-basic);
  width: var(--width-aside);
  flex-shrink: 0;
  transition: var(--tr-slow);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-icon);
  }
  .left_aside_container {
    margin: var(--mr-md) var(--mr-xs);
  }
`;

const LeftAsideComponent = (props) => {
  if (props.authorizedUser.length === 0) return null; // Проверка на авторизованного пользователя

  return (
    <LeftAsideWrapper>
      <HeaderLeftAside
        searchFieldValue={props.searchFieldValue}
        fieldValue={props.fieldValue}
        setOpenMenu={props.setOpenMenu}
      />
      <div className='left_aside_container'>
        <DialogsContainer
          authorizedUser={props.authorizedUser}
          chooseCurrentDialog={props.chooseCurrentDialog}
          chooseCurrentDialogUserInfo={props.chooseCurrentDialogUserInfo}
          messagesCombine={props.messagesCombine}
          dialogs={props.dialogs}
          chooseCurrentUser={props.chooseCurrentUser}
        />
      </div>
    </LeftAsideWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsReducer.dialogs,
    authorizedUser: state.usersReducer.authorizedUser,
    fieldValue: state.dialogsReducer.fieldValue,
    users: state.usersReducer.users,
  };
};

export const LeftAside = connect(mapStateToProps, {
  chooseCurrentDialog,
  chooseCurrentDialogUserInfo,
  messagesCombine,
  searchFieldValue,
  chooseCurrentUser,
  getListDialogs,
})(LeftAsideComponent);
