import styled from '@emotion/styled';

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 400px;
  margin: 0 auto;
`;

export const StyledButton = styled.button`
  border: none;
  width: 120px;
  padding: 10px;
  cursor: pointer;
  background: #bfccc5;
  border-radius: 16px;
  font-weight: bold;
  font-size: 16px;
  &:hover {
    background: #15ce73;
  }
  &:focus {
    background: #15ce73;
  }
`;
