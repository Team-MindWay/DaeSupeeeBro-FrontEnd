import styled from "styled-components";

export const Container = styled.div`
  transform: scale(0.8, 0.8);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  margin-bottom: 5.625rem;
  color: #121212;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  font-feature-settings: "liga" off, "clig" off;
  letter-spacing: -0.125rem;
`;

export const Input = styled.input`
  width: 18.75rem;
  height: 2.5rem;
  margin-bottom: 0.625rem;
  padding: 0.625rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.3125rem;
`;

export const Button = styled.button`
  width: 32rem;
  height: 5.75rem;
  background-color: #34c759;
  color: #fcfcfc;
  border: none;
  border-radius: 0.625rem;
  margin-top: 2.6875rem;
  font-size: 1.875rem;
  font-family: "Prestandard";
  font-weight: 700;
  letter-spacing: -0.01rem;
  cursor: pointer;
`;

export const Select = styled.select`
  appearance: none;
  outline: none;
  width: 36.25rem;
  height: 6.25rem;
  margin-top: 1.25rem;
  border-radius: 0.625rem;
  border: 0.0625rem solid #707070;
  background: #f9f9f9;
  color: #707070;
  font-size: 1.375rem;
  font-weight: 500;
  letter-spacing: -0.03125rem;
  padding: 1.4375rem;
`;

export const Option = styled.option`
  background-color: #f9f9f9;
  color: #707070;
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: -0.03125rem;
`;