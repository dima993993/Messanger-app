import Dialog from "./Dialog";
import styled from "styled-components";
const WrapperDialogsContainer = styled.div``;
const DialogsContainer = ({
  authorizedUser,
  chooseCurrentDialog,
  messagesCombine,
  dialogs,
  chooseCurrentUser,
}) => {
  return (
    <WrapperDialogsContainer>
      <div>
        {dialogs.map((dialog, index) => {
          return (
            <Dialog
              key={index}
              dialog={dialog}
              chooseCurrentDialog={chooseCurrentDialog}
              userInfo={dialog.userInfo}
              date={dialog.date.getHours() + ":" + dialog.date.getMinutes()}
              messagesCombine={messagesCombine}
              chooseCurrentUser={chooseCurrentUser}
              authUserId={authorizedUser.idUser}
            />
          );
        })}
      </div>
    </WrapperDialogsContainer>
  );
};
export default DialogsContainer;
