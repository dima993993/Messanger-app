import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Content } from "./components/Content/Content";
import { LeftAside } from "./components/LeftAside/LeftAside";
import { RightAside } from "./components/RightAside/RightAside";
import { Authorization } from "./components/Authorization/Authorization";
import { Menu } from "./components/Menu/Menu";
import styled from "styled-components";

const WrapperApp = styled.div`
  height: 100vh;
  display: flex;
  overflow-x: hidden;
`;

const AppComponent = (props) => {
  // Изменение темы
  let body = document.querySelector("body");
  body.setAttribute("data-theme", props.theme);
  let [openRightAside, setOpenRightAside] = useState(false); // Открыть панель с информацией о пользователе
  let [openMenu, setOpenMenu] = useState(false); // Открыть навигационную панель
  // Редирект с помощью хука useNavigate (react-router)
  let navigate = useNavigate();
  useEffect(() => {
    if (props.authorizedUser.length === 0) {
      navigate("/authorization");
    } else {
      navigate("/");
    }
  }, [props.authorizedUser]);
  return (
    <WrapperApp>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <LeftAside setOpenMenu={setOpenMenu} />
      <Routes>
        <Route
          path='/'
          element={<Content setOpenRightAside={setOpenRightAside} />}
        />
        <Route
          path='/dialog/:id'
          element={<Content setOpenRightAside={setOpenRightAside} />}
        />
        <Route path='/authorization' element={<Authorization />} />
      </Routes>
      <RightAside
        setOpenRightAside={setOpenRightAside}
        openRightAside={openRightAside}
      />
    </WrapperApp>
  );
};
const mapStateToProps = (state) => {
  return {
    authorizedUser: state.usersReducer.authorizedUser,
    theme: state.supportReducer.theme,
  };
};
const App = connect(mapStateToProps, {})(AppComponent);

export default App;
