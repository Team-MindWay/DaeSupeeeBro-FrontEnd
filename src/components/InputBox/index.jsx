import { useState } from "react";
import * as S from "./style";
import EyeT from "../../assets/Eye.svg";
import EyeF from "../../assets/EyeSlash.svg";

function InputBox({ type, text, width, height, eye }) {
  const [isEyeOpen, setEye] = useState(false);

  return (
    <S.Wrapper>
      <S.Input type={isEyeOpen ? "text" : type} placeholder={text} width={width} />
      {eye && (
        <S.Eye
          src={isEyeOpen ? EyeT : EyeF}
          alt=""
          onClick={() => {setEye(!isEyeOpen)}}
        />
      )}
    </S.Wrapper>
  );
}

export default InputBox;
