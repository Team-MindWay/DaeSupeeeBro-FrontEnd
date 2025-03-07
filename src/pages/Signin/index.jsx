import { useNavigate } from "react-router-dom";
import * as S from "./style";
import InputBox from "../../components/InputBox";

function Signin() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Title>로그인</S.Title>
      <S.Wrapper>
        <InputBox
          type="text"
          text="이메일 (@gsm.hs.kr)"
          width="536px"
          eye={false}
        />
        <InputBox type="password" text="비밀번호" width="536px" eye={true} />
        <S.GogoPassword>
          <S.Sentence>비밀번호를 잊으셨나요?</S.Sentence>
          <S.Link
            onClick={() => {navigate("/findpassword")}}
          >
            비밀번호 찾기
          </S.Link>
        </S.GogoPassword>
      </S.Wrapper>
      <S.ButtonWrapper>
        <S.Button>로그인</S.Button>
        <S.GogoSignup>
          <S.Sentence>대숲이형은 처음인가요?</S.Sentence>
          <S.Link
            onClick={() => {navigate("/signup1")}}
          >
            회원가입
          </S.Link>
        </S.GogoSignup>
      </S.ButtonWrapper>
    </S.Container>
  );
}

export default Signin;
