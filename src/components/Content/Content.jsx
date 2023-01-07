import { useRef } from "react";
import { connect } from "react-redux";
import {
  addNewChat,
  addNewMessage,
  changeTextValueMessage,
  messagesCombine,
} from "../../redux/messagesReducer";
import {
  chooseCurrentDialog,
  getListDialogs,
  sortDialogs,
  updateDialogs,
} from "../../redux/dialogsReducer";
import EnterMessege from "./EnterMessage";
import HeaderContent from "./HeaderContent";
import MessagesContainer from "./Messages/MessagesContainer";
import styled from "styled-components";

const ContentWrapper = styled.div`
  background-color: var(--color-aditional);
  width: 100%;
  transition: var(--tr-slow);
  position: relative;
`;

const ContentComponent = (props) => {
  let scrollContainer = useRef(null); // Выбор контейнера который нужно скролить
  if (props.authorizedUser.length === 0) return null; // Проверка на авторизованного пользователя
  // Скролл к последнему сообщению
  if (scrollContainer.current !== null) {
    setTimeout(function () {
      scrollContainer.current.scrollTo(0, scrollContainer.current.scrollHeight);
    }, 100); // Задержка для скролла, нужна так как сначала происходит скролл к концу контейнера а потом добавление сообщения из за чего последнее сообщение не видно после рендера на странице.
  }

  return (
    <ContentWrapper>
      {props.currentDialog ? (
        <>
          <HeaderContent
            setOpenRightAside={props.setOpenRightAside}
            userInfo={props.currentDialog.userInfo}
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
            getListDialogs={props.getListDialogs}
            sortDialogs={props.sortDialogs}
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
  getListDialogs,
  sortDialogs,
  addNewChat,
})(ContentComponent);
