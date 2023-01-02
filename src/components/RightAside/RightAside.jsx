import { connect } from "react-redux";
import HeaderRightAside from "./HeaderRightAside";
import UserInfo from "./UserInfo/UserInfo";
import styled from "styled-components";

const RightAsideWrapper = styled.div`
  background-color: var(--color-basic);
  width: var(--width-aside);
  flex-shrink: 0;
  margin-right: ${(props) =>
    props.openRightAside ? "0" : "var(--width-aside-invers)"};
  transition: var(--tr-slow);
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-icon);
  }
`;

export const RightAsideComponent = (props) => {
  if (props.currentUser.length === 0) return null;
  return (
    <RightAsideWrapper openRightAside={props.openRightAside}>
      <HeaderRightAside closeRightAside={props.setOpenRightAside} />
      <UserInfo profile={props.currentUser[0].profile} />
    </RightAsideWrapper>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: state.usersReducer.currentUser,
  };
};

export const RightAside = connect(mapStateToProps, {})(RightAsideComponent);
