import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { messagesCombine } from "../../redux/messagesReducer";
import {
  chooseCurrentDialog,
  getListDialogs,
  searchFieldValue,
} from "../../redux/dialogsReducer";
import { chooseCurrentUser } from "../../redux/usersReducer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import HeaderLeftAside from "./HeaderLeftAside";
import styled from "styled-components";
import { filterForSearch } from "../../helpers/filterForSearch";
import UsersContainer from "./Users/UsersContainer";

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
  useEffect(() => {
    if (props.authorizedUser.length > 0) {
      props.getListDialogs(props.authorizedUser[0].idUser);
    }
  }, [props.authorizedUser]);
  if (props.authorizedUser.length === 0) return null; // Проверка на авторизованного пользователя
  let switchLeftAside = () => {
    switch (props.stateLeftAside) {
      case "searchUser":
        return (
          <UsersContainer
            users={filterForSearch(props.users, props.fieldValue, "profile")}
            authorizedUser={props.authorizedUser[0]}
          />
        );
      default:
        return (
          <DialogsContainer
            authorizedUser={props.authorizedUser}
            chooseCurrentDialog={props.chooseCurrentDialog}
            messagesCombine={props.messagesCombine}
            dialogs={filterForSearch(
              props.myDialogs,
              props.fieldValue,
              "userInfo"
            )}
            chooseCurrentUser={props.chooseCurrentUser}
          />
        );
    }
  };

  return (
    <LeftAsideWrapper>
      <HeaderLeftAside
        searchFieldValue={props.searchFieldValue}
        fieldValue={props.fieldValue}
        setOpenMenu={props.setOpenMenu}
        setStateLeftAside={props.setStateLeftAside}
      />
      <div className='left_aside_container'>{switchLeftAside()}</div>
    </LeftAsideWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsReducer.dialogs,
    authorizedUser: state.usersReducer.authorizedUser,
    fieldValue: state.dialogsReducer.fieldValue,
    users: state.usersReducer.users,
    myDialogs: state.dialogsReducer.myDialogs,
    stateLeftAside: state.supportReducer.stateLeftAside,
  };
};

export const LeftAside = connect(mapStateToProps, {
  chooseCurrentDialog,
  messagesCombine,
  searchFieldValue,
  chooseCurrentUser,
  getListDialogs,
})(LeftAsideComponent);
