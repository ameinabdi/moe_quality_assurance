import styled from 'styled-components';

const ButtonLink = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #0b7063;
  text-decoration: none;
  display: inline;
  margin: 0;
  padding: 0;

  &:hover {
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
  }
`;

export default ButtonLink;
