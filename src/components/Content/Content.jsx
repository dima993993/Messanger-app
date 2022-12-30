import { connect } from "react-redux";
import { chooseCurrentDialog, updateDialogs } from "../../redux/dialogsReducer";
import EnterMessege from "./EnterMessage";
import HeaderContent from "./HeaderContent";
import MessagesContainer from "./Messages/MessagesContainer";
import Preloader from "./../Common/Preloader";
import styled from "styled-components";
import {
  addNewMessage,
  changeTextValueMessage,
  messagesCombine,
} from "../../redux/messagesReducer";
import { useRef } from "react";

const ContentWrapper = styled.div`
  background-color: var(--color-aditional);
  width: 100%;
  transition: var(--tr-slow);
  position: relative;
`;

const ContentComponent = (props) => {
  // Scroll to last message
  let scrollContainer = useRef(null); // Change scroll container
  if (scrollContainer.current !== null) {
    setTimeout(function () {
      scrollContainer.current.scrollTo(0, scrollContainer.current.scrollHeight);
    }, 100);
  }
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
            scrollContainer={scrollContainer}
          />
          <EnterMessege
            messageTextValue={props.messageTextValue}
            changeValue={props.changeTextValueMessage}
            addNewMessage={props.addNewMessage}
            idAuthUser={props.authorizedUser[0].idUser}
            idDialog={props.currentDialog.idDialog}
            messagesCombine={props.messagesCombine}
            updateDialogs={props.updateDialogs}
          />
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
    messageTextValue: state.messagesReducer.messageTextValue,
  };
};

export const Content = connect(mapStateToProps, {
  chooseCurrentDialog,
  changeTextValueMessage,
  addNewMessage,
  messagesCombine,
  updateDialogs,
})(ContentComponent);
