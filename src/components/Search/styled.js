import styled from "styled-components";
import { ReactComponent as SearchIconSvg } from "../../assets/searchIcon.svg";

export const SearchElement = styled.div`
  position: relative;
  height: 3.25rem;
  border-radius: 26px;
  background: ${({ theme }) => theme.panelBgColor};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.4rem;
  display: flex;
  align-items: center;
  z-index: 1;
`;
export const SearchInput = styled.input`
  flex: 1;
  border-radius: 9999px;
  margin-left: 1rem;
  height: 3.25rem;
  border: none;
  background-color: ${({ theme }) => theme.panelBgColor};
  font-size: 1.125rem;
  color: ${({ theme }) => theme.searchInput.color};
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.searchInput.placeholderColor};
  }
`;
export const SearchIcon = styled(SearchIconSvg)`
  margin-left: 1.2rem;
  fill: #4a6fa1;
`;
