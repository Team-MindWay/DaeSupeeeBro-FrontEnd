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
  font-feature-settings: 'liga' off, 'clig' off;
  letter-spacing: -2px;
`;

export const Button = styled.button`
  width: 512px;
  height: 92px;
  background-color: #34C759;
  color: #FCFCFC;
  border: none;
  border-radius: 10px;
  margin-top: 43px;
  font-size: 30px;
  font-family: "Prestandard";
  font-weight: 700;
  letter-spacing: -0.16px;
  cursor: pointer;
`;