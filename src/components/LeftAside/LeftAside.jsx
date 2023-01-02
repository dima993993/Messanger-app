import { connect } from "react-redux";
import HeaderLeftAside from "./HeaderLeftAside";
import styled from "styled-components";
import {
  chooseCurrentDialog,
  chooseCurrentDialogUserInfo,
  searchFieldValue,
} from "../../redux/dialogsReducer";
import { messagesCombine } from "../../redux/messagesReducer";
import DialogsContainer from "./Dialogs/DialogsContainer";

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
        <DialogsContainer {...props} />
      </div>
    </LeftAsideWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsReducer.dialogs,
    authorizedUser: state.usersReducer.authorizedUser,
    fieldValue: state.dialogsReducer.fieldValue,
  };
};
export const LeftAside = connect(mapStateToProps, {
  chooseCurrentDialog,
  chooseCurrentDialogUserInfo,
  messagesCombine,
  searchFieldValue,
})(LeftAsideComponent);
