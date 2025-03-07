import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  margin-bottom: 90px;
  color: #121212;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  font-feature-settings: "liga" off, "clig" off;
  letter-spacing: -2px;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 512px;
  height: 92px;
  background-color: #34c759;
  color: #fcfcfc;
  border: none;
  border-radius: 10px;
  margin-top: 43px;
  font-size: 30px;
  font-family: "Prestandard";
  font-weight: 700;
  letter-spacing: -0.16px;
  cursor: pointer;
`;

export const Select = styled.select`
  appearance: none;
  outline: none;
  width: 580px;
  height: 100px;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid #707070;
  background: #f9f9f9;
  color: #707070;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.5px;
  padding: 23px;
`;

export const Option = styled.option`
  background-color: #f9f9f9;
  color: #707070;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.5px;
`;
