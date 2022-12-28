import { connect } from "react-redux";
import Dialog from "./Dialog";
import HeaderLeftAside from "./HeaderLeftAside";
import styled from "styled-components";
import {
  chooseCurrentDialog,
  chooseCurrentDialogUser,
} from "../../redux/dialogsReducer";
let dialogs = ["123", "456", "789"];

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
`;
const DialogsContainer = styled.div`
  margin: var(--mr-md) var(--mr-xs);
`;

const LeftAsideComponent = (props) => {
  return (
    <LeftAsideWrapper>
      <HeaderLeftAside />
      <DialogsContainer>
        {dialogs.map((dialog, index) => {
          return <Dialog key={index} dialog={dialog} />;
        })}
      </DialogsContainer>
    </LeftAsideWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsReducer.dialogs,
    messages: state.messagesReducer.messages,
    authorizationUser: state.usersReducer.authorizationUser,
    currentDialogUser: state.dialogsReducer.currentDialogUser,
  };
};

export const LeftAside = connect(mapStateToProps, {
  chooseCurrentDialog,
  chooseCurrentDialogUser,
})(LeftAsideComponent);
