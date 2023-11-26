import styled from 'styled-components';

export const MoviesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MovieItem = styled.li`
  width: 300px;
`;

export const MovieName = styled.h3`
  text-align: center;
  margin-top: 2px;
`;

export const MoviePoster = styled.img`
  display: block;
  height: 400px;
`;
