import { connect } from "react-redux";
import {
  faGear,
  faSearch,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";
import styled from "styled-components";
import MenuHeader from "./MenuHeader";
import { setStateLeftAside, switchTheme } from "../../redux/supportReducer";
import { chooseCurrentUser, logOut } from "../../redux/usersReducer";
import { chooseCurrentDialog } from "../../redux/dialogsReducer";

const MenuWrapper = styled.div`
  width: var(--width-aside);
  height: 100vh;
  position: absolute;
  top: 0;
  left: ${(props) => (props.openMenu ? "0" : "var(--width-aside-invers)")};
  transition: var(--tr-middle);
  background-color: var(--color-basic);
  z-index: 999;
`;
const BodyBgMenu = styled.div`
  display: ${(props) => (props.openMenu ? "block" : "none")};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

const MenuComponent = ({ openMenu, setOpenMenu, ...props }) => {
  if (props.authorizedUser.length === 0) return null; // Проверка на авторизованного пользователя
  return (
    <>
      <BodyBgMenu
        openMenu={openMenu}
        onClick={() => setOpenMenu(false)}></BodyBgMenu>
      <MenuWrapper openMenu={openMenu}>
        <div>
          <div>
            <MenuHeader
              profile={props.authorizedUser[0].profile}
              theme={props.theme}
              switchTheme={props.switchTheme}
            />
          </div>
          <div onClick={() => props.setStateLeftAside("searchUser")}>
            <MenuItem nameItem='Search User' icon={faSearch} />
          </div>
          <MenuItem nameItem='Settings' icon={faGear} />
          <div
            onClick={() => {
              props.logOut();
              props.chooseCurrentDialog(null);
              props.chooseCurrentUser([]);
              setOpenMenu(false);
            }}>
            <MenuItem nameItem='Log Out' icon={faArrowRightFromBracket} />
          </div>
        </div>
      </MenuWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    authorizedUser: state.usersReducer.authorizedUser,
    theme: state.supportReducer.theme,
  };
};

export const Menu = connect(mapStateToProps, {
  switchTheme,
  logOut,
  chooseCurrentDialog,
  chooseCurrentUser,
  setStateLeftAside,
})(MenuComponent);
