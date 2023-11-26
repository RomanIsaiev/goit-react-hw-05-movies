import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  padding-top: 20px;
  padding-bottom: 20px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;

  list-style: none;
  padding: 0;
  margin: 0;

  margin-bottom: 40px;
`;

export const ListItem = styled.li`
  font-size: 28px;
  font-weight: 700;
  text-decoration: none;
`;
