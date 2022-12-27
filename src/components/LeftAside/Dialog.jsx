import { NavLink } from "react-router-dom";
import UserPhoto from "./../Common/UserPhoto";
import styled from "styled-components";

const DialogWrapper = styled.div`
  & > * {
    text-decoration: none;
    color: var(--color-text);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--mr-xs);
    padding: var(--pd-sm);
    font-size: var(--fs-sm);
    border-radius: var(--radius-sm);
    transition: var(--tr-fast);
    &:hover {
      background-color: var(--color-aditional);
    }
    .name_block {
      width: 70%;
      margin-left: var(--mr-sm);
      overflow: hidden;
      div:last-child {
        color: var(--color-text-sub);
        margin-top: var(--mr-xs);
      }
    }
    .date {
      margin-left: var(--mr-xs);
      color: var(--color-text-sub);
    }
  }
`;

const Dialog = ({ text, id }) => {
  return (
    <DialogWrapper>
      <NavLink
        to={`/${id}`}
        className={(state) => (state.isActive ? "active-link" : "")}
      >
        <div className="photo">
          <UserPhoto />
        </div>
        <div className="name_block">
          <div>{text}</div>
          <div>Lorem, ipsum dolor.</div>
        </div>
        <div className="date">Date</div>
      </NavLink>
    </DialogWrapper>
  );
};
export default Dialog;
