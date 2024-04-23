import styled from 'styled-components';

const DeleteButtonLink = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #CB0441;
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

export default DeleteButtonLink;
