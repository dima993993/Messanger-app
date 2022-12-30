import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Content } from "./components/Content/Content";
import { LeftAside } from "./components/LeftAside/LeftAside";
import { RightAside } from "./components/RightAside/RightAside";
import styled from "styled-components";
import { Authorization } from "./components/Authorization/Authorization";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { Menu } from "./components/Menu/Menu";

const WrapperApp = styled.div`
  height: 100vh;
  display: flex;
  overflow-x: hidden;
`;

const AppComponent = (props) => {
  let [openRightAside, setOpenRightAside] = useState(false);
  let [openMenu, setOpenMenu] = useState(false);
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
  };
};
const App = connect(mapStateToProps, {})(AppComponent);

export default App;
