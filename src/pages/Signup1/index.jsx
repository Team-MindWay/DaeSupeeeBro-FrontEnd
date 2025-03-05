import { useNavigate } from "react-router-dom";
import * as S from "./style";
import EmailBox from "../../components/EmailBox";
import PasswordBox from "../../components/PasswordBox";
import PasswordCheckBox from "../../components/PasswordCheckBox";

function Signup() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Title>회원가입</S.Title>
      <EmailBox />
      <PasswordBox />
      <PasswordCheckBox />
      <S.Button onClick={() => {navigate("/Signup2")}}>회원가입</S.Button>
    </S.Container>
  );
}

export default Signup;
