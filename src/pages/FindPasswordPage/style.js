import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  position: absolute;
  top: 120px;
  color: #121212;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  font-feature-settings: "liga" off, "clig" off;
  letter-spacing: -2px;
`;

export const Button = styled.button`
  width: 512px;
  height: 92px;
  position: absolute;
  bottom: 140px;
  background-color: #34c759;
  color: #fcfcfc;
  border: none;
  border-radius: 10px;
  font-size: 30px;
  font-family: "Prestandard";
  font-weight: 700;
  letter-spacing: -0.16px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 270px;
`;
