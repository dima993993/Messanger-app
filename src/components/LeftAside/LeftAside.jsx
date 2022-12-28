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
  // console.log(props.authorizedUser[0].chats);
  let changeDialogs;
  if (props.authorizedUser.length > 0) {
    changeDialogs = props.authorizedUser[0].chats.map((chat) =>
      props.dialogs.filter((dialog) => dialog.idDialog === chat)
    );
  }

  return (
    <LeftAsideWrapper>
      {props.authorizedUser.length > 0 ? (
        <>
          <HeaderLeftAside />
          <DialogsContainer>
            {changeDialogs.map((dialog, index) => {
              let objUsers = Object.keys(dialog[0].userInfo);
              let rules =
                +objUsers[0] === props.authorizedUser[0].idUser
                  ? objUsers[1]
                  : objUsers[0];
              console.log(objUsers);
              return (
                <Dialog
                  key={index}
                  dialog={dialog[0]}
                  chooseCurrentDialog={props.chooseCurrentDialog}
                  userInfo={dialog[0].userInfo[rules]}
                  date={
                    dialog[0].date.getHours() +
                    ":" +
                    dialog[0].date.getMinutes()
                  }
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
