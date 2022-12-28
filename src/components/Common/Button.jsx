import styled from "styled-components";

const WrapperButton = styled.button`
  width: 100%;
  border: none;
  color: var(--color-text);
  background-color: var(--color-icon);
  cursor: pointer;
  padding: var(--pd-sm) var(--pd-sm);
  border-radius: var(--radius-item);
  transition: var(--tr-fast);
  &:hover {
    background-color: var(--color-text-sub);
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.3);
  }
`;
const Button = ({ text }) => {
  return <WrapperButton>{text}</WrapperButton>;
};
export default Button;
