import styled from "styled-components";

export const Wrapper = styled.div`
  width: 580px;
  height: 100px;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid #707070;
  background: #F9F9F9;
  display: flex;

`;

export const Input = styled.input`
  width: ${props => props.width};;
  height: 68px;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.5px;
  background-color: #00ff0000;
  color: #707070;
  border: none;
  margin: 16px 22px;


  &:focus {
    background-color: none;
    outline: none;
  }
`;

export const Eye = styled.img`
  margin: 33px;
`;