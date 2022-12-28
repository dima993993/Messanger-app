import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Content } from "./components/Content/Content";
import { LeftAside } from "./components/LeftAside/LeftAside";
import { RightAside } from "./components/RightAside/RightAside";
import styled from "styled-components";
import { Authorization } from "./components/Authorization/Authorization";

const WrapperApp = styled.div`
  height: 100vh;
  display: flex;
  overflow-x: hidden;
`;

const App = () => {
  let [openRightAside, setOpenRightAside] = useState(false);
  return (
    <WrapperApp>
      <LeftAside />
      <Routes>
        <Route
          path="/"
          element={<Content setOpenRightAside={setOpenRightAside} />}
        />
        <Route
          path="/dialog/:id"
          element={<Content setOpenRightAside={setOpenRightAside} />}
        />
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
      <RightAside
        setOpenRightAside={setOpenRightAside}
        openRightAside={openRightAside}
      />
    </WrapperApp>
  );
};

export default App;
