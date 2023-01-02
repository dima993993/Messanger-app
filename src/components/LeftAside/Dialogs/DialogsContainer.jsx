import styled from "styled-components";
import Dialog from "./Dialog";
const WrapperDialogsContainer = styled.div``;
const DialogsContainer = ({
  authorizedUser,
  chooseCurrentDialog,
  chooseCurrentDialogUserInfo,
  messagesCombine,
  dialogs,
  chooseCurrentUser,
}) => {
  // Получаем список диалогов авторизованного пользователя
  let changeDialogs;
  if (authorizedUser.length > 0) {
    changeDialogs = authorizedUser[0].chats.map((chat) =>
      dialogs.filter((dialog) => dialog.idDialog === chat)
    );
  }
  return (
    <WrapperDialogsContainer>
      <div>
        {changeDialogs.map((dialog, index) => {
          let objUsers = Object.keys(dialog[0].userInfo);
          let rules =
            +objUsers[0] === authorizedUser[0].idUser
              ? objUsers[1]
              : objUsers[0];
          return (
            <Dialog
              key={index}
              dialog={dialog[0]}
              chooseCurrentDialog={chooseCurrentDialog}
              userInfo={dialog[0].userInfo[rules]}
              date={
                dialog[0].date.getHours() + ":" + dialog[0].date.getMinutes()
              }
              chooseCurrentDialogUserInfo={chooseCurrentDialogUserInfo}
              messagesCombine={messagesCombine}
              chooseCurrentUser={chooseCurrentUser}
              authUserId={authorizedUser[0].idUser}
            />
          );
        })}
      </div>
    </WrapperDialogsContainer>
  );
};
export default DialogsContainer;
