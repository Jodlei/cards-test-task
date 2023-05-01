import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  height: 60px;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderLink = styled(NavLink)`
  :not(:last-child) {
    margin-right: 15px;
  }
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  display: inline-flex;

  align-items: center;

  justify-content: center;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  vertical-align: middle;

  font-size: 0.875rem;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 16px;

  color: rgba(0, 0, 0, 0.87);
  background-color: rgb(144, 202, 249);
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

  :hover {
    background-color: rgb(66, 165, 245);
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
      rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  }

  &.active {
    color: white;
    background-color: rgb(45, 118, 179);
  }
`;
