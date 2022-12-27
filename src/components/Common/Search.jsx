import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const WrapperSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--color-aditional);
  padding: var(--pd-sm);
  border-radius: var(--radius-lg);
  border: 2px solid transparent;
  box-sizing: border-box;
  &:focus-within {
    border-color: var(--color-active);
  }
  input {
    width: 100%;
    outline: none;
    border: none;
    background-color: transparent;
    color: var(--color-text-sub);
    font-size: var(--fs-sm);
  }
  .icon_search {
    font-size: var(--fs-sm);
    color: var(--color-icon);
    cursor: pointer;
  }
`;

const Search = () => {
  return (
    <WrapperSearch>
      <div className="icon_search">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input type="text" placeholder="Search" />
    </WrapperSearch>
  );
};
export default Search;
