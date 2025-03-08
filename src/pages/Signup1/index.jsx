import { useNavigate } from "react-router-dom";
import * as S from "./style";
import InputBox from "../../components/InputBox";

function Signup() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Title>회원가입</S.Title>
      <InputBox type="text" text="이메일 (@gsm.hs.kr)" eye={false}/>
      <InputBox type="password" text="비밀번호" eye={true}/>
      <InputBox type="password" text="비밀번호 확인" eye={false}/>
      <S.Button onClick={() => {navigate("/Signup2")}}>회원가입</S.Button>
    </S.Container>
  );
}

export default Signup;
