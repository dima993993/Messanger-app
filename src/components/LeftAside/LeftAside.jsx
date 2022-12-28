import { connect } from "react-redux";
import Dialog from "./Dialog";
import HeaderLeftAside from "./HeaderLeftAside";
import styled from "styled-components";
import { chooseCurrentDialog } from "../../redux/dialogsReducer";

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
  console.log(props.authorizedUser);
  return (
    <LeftAsideWrapper>
      {props.authorizedUser.length > 0 ? (
        <>
          <HeaderLeftAside />
          <DialogsContainer>
            {props.dialogs.map((dialog, index) => {
              let objUsers = Object.keys(dialog.userInfo);
              let rules =
                objUsers[0] === props.authorizedUser[0].idUser
                  ? objUsers[0]
                  : objUsers[1];
              console.log(rules);

              return (
                <Dialog
                  key={index}
                  dialog={dialog}
                  chooseCurrentDialog={props.chooseCurrentDialog}
                  userInfo={dialog.userInfo[rules]}
                  date={dialog.date.getHours() + ":" + dialog.date.getMinutes()}
                />
              );
            })}
          </DialogsContainer>
        </>
      ) : (
        <div></div>
      )}
    </LeftAsideWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsReducer.dialogs,
    authorizedUser: state.usersReducer.authorizedUser,
  };
};

export const LeftAside = connect(mapStateToProps, {
  chooseCurrentDialog,
})(LeftAsideComponent);
