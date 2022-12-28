import { connect } from "react-redux";
import { chooseCurrentDialog } from "../../redux/dialogsReducer";
import EnterMessege from "./EnterMessage";
import HeaderContent from "./HeaderContent";
import MessagesContainer from "./Messages/MessagesContainer";
import Preloader from "./../Common/Preloader";
import styled from "styled-components";

const ContentWrapper = styled.div`
  background-color: var(--color-aditional);
  width: 100%;
  transition: var(--tr-slow);
  position: relative;
`;

const ContentComponent = (props) => {
  return (
    <ContentWrapper>
      <HeaderContent setOpenRightAside={props.setOpenRightAside} />
      <MessagesContainer />
      <EnterMessege />
    </ContentWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsReducer.dialogs,
    currentDialog: state.dialogsReducer.currentDialog,
    messages: state.messagesReducer.messages,
  };
};

export const Content = connect(mapStateToProps, {
  chooseCurrentDialog,
})(ContentComponent);
