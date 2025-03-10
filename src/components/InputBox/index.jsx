import { useState } from "react";
import * as S from "./style";
import EyeT from "../../assets/Eye.svg";
import EyeF from "../../assets/EyeSlash.svg";

function InputBox({ type, text, eye }) {
  const [isEyeOpen, setEye] = useState(false);

  return (
    <S.Wrapper>
      <S.Input max={50} type={isEyeOpen ? "text" : type} placeholder={text}/>
      {eye && (
        <S.Eye
          src={isEyeOpen ? EyeT : EyeF}
          alt="비밀번호 숨기기 버튼"
          onClick={() => setEye(!isEyeOpen)}
        />
      )}
    </S.Wrapper>
  );
}

export default InputBox;
