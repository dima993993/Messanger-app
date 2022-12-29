import { connect } from "react-redux";
import { chooseCurrentDialog } from "../../redux/dialogsReducer";
import EnterMessege from "./EnterMessage";
import HeaderContent from "./HeaderContent";
import MessagesContainer from "./Messages/MessagesContainer";
import Preloader from "./../Common/Preloader";
import styled from "styled-components";
import { messagesCombine } from "../../redux/messagesReducer";

const ContentWrapper = styled.div`
  background-color: var(--color-aditional);
  width: 100%;
  transition: var(--tr-slow);
  position: relative;
`;

const ContentComponent = (props) => {
  return (
    <ContentWrapper>
      {props.authorizedUser.length > 0 && props.currentDialog ? (
        <>
          <HeaderContent
            setOpenRightAside={props.setOpenRightAside}
            userInfo={props.currentDialogUserInfo}
          />
          <MessagesContainer
            messages={props.combineMessage}
            authorizedUser={props.authorizedUser}
          />
          <EnterMessege />
        </>
      ) : (
        <div></div>
      )}
    </ContentWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsReducer.dialogs,
    currentDialog: state.dialogsReducer.currentDialog,
    currentDialogUserInfo: state.dialogsReducer.currentDialogUserInfo,
    combineMessage: state.messagesReducer.combineMessage,
    authorizedUser: state.usersReducer.authorizedUser,
  };
};

export const Content = connect(mapStateToProps, {
  chooseCurrentDialog,
})(ContentComponent);
