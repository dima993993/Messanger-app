import styled from "styled-components";
import UserPhoto from "../Common/UserPhoto";
import { connect } from "react-redux";
import MenuItem from "./MenuItem";
import {
  faGear,
  faMoon,
  faSearch,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const MenuWrapper = styled.div`
  width: var(--width-aside);
  height: 100vh;
  position: absolute;
  top: 0;
  left: ${(props) => (props.openMenu ? "0" : "-250px")};
  transition: var(--tr-middle);
  background-color: var(--color-basic);
  z-index: 9999;
  & > div {
    .user {
      margin: var(--mr-sm);
      padding: var(--pd-sm);
      .block_photo {
        width: 100%;
      }
    }
    .name_user {
      margin-top: var(--mr-sm);
    }
  }
`;
const BodyBgMenu = styled.div`
  display: ${(props) => (props.openMenu ? "block" : "none")};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const MenuComponent = ({ openMenu, setOpenMenu, ...props }) => {
  let getTheme = localStorage.getItem("theme");
  let [theme, setTheme] = useState(getTheme !== null ? getTheme : "light");
  let body = document.querySelector("body");
  body.setAttribute("data-theme", theme);
  let profile =
    props.authorizedUser.length > 0 ? props.authorizedUser[0].profile : "";
  return (
    <>
      {props.authorizedUser.length > 0 ? (
        <>
          <BodyBgMenu
            openMenu={openMenu}
            onClick={() => setOpenMenu(false)}></BodyBgMenu>
          <MenuWrapper openMenu={openMenu}>
            <div>
              <div className='user'>
                <div className='block_photo'>
                  <UserPhoto
                    photo={profile.photo}
                    firstName={profile.firstName}
                    lastName={profile.lastName}
                  />
                </div>
                <div className='name_user'>
                  {profile.firstName + " " + profile.lastName}
                </div>
              </div>
              <div
                onClick={() => {
                  if (theme !== "light") {
                    localStorage.setItem("theme", "light");
                    setTheme("light");
                  } else {
                    localStorage.setItem("theme", "dark");
                    setTheme("dark");
                  }
                }}>
                <MenuItem
                  nameItem={theme === "light" ? "Dark Theme" : "Light Theme"}
                  icon={theme === "light" ? faMoon : faSun}
                />
              </div>
              <MenuItem nameItem='Search User' icon={faSearch} />
              <MenuItem nameItem='Settings' icon={faGear} />
            </div>
          </MenuWrapper>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    authorizedUser: state.usersReducer.authorizedUser,
  };
};

export const Menu = connect(mapStateToProps, {})(MenuComponent);
