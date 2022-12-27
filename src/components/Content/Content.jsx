import styled from "styled-components";
import EnterMessege from "./EnterMessage";
import HeaderContent from "./HeaderContent";
import MessagesContainer from "./Messages/MessagesContainer";

const ContentWrapper = styled.div`
  background-color: var(--color-aditional);
  width: 100%;
  transition: var(--tr-slow);
  position: relative;
`;

export const Content = (props) => {
  return (
    <ContentWrapper>
      <HeaderContent setOpenRightAside={props.setOpenRightAside} />
      <MessagesContainer />
      <EnterMessege />
    </ContentWrapper>
  );
};

export default Content;
