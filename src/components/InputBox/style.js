import styled from "styled-components";

export const Wrapper = styled.div`
  width: 36.25rem;
  height: 6.25rem;
  margin-top: 1.25rem;
  border-radius: 0.625rem;
  border: 1px solid #707070;
  background: #F9F9F9;
  display: flex;
`;

export const Input = styled.input`
  width: 33.5rem;
  height: 4.25rem;
  font-size: 1.375rem;
  font-weight: 500;
  letter-spacing: -0.03125rem;
  background-color: #00ff0000;
  color: #707070;
  border: none;
  margin: 1rem 1.375rem;

  &:focus {
    background-color: none;
    outline: none;
  }
`;

export const Eye = styled.img`
  margin: 2.0625rem 1.5rem 2.0625rem 0;
`;
