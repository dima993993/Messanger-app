import { useState } from "react";
import { Content } from "./components/Content/Content";
import { LeftAside } from "./components/LeftAside/LeftAside";
import { RightAside } from "./components/RightAside/RightAside";
import styled from "styled-components";

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
      <Content setOpenRightAside={setOpenRightAside} />
      <RightAside
        setOpenRightAside={setOpenRightAside}
        openRightAside={openRightAside}
      />
    </WrapperApp>
  );
};

export default App;
