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
          let getDate = dialog.date.split("T");
          let time = getDate[1].split(":");
          return (
            <Dialog
              key={index}
              dialog={dialog}
              chooseCurrentDialog={chooseCurrentDialog}
              userInfo={dialog.userInfo}
              date={time[0] + ":" + time[1]}
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
