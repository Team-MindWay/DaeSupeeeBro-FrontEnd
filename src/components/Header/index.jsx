import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import Magnifier from "../../assets/Magnifier.svg";
import Bell from "../../assets/Bell.svg";
import Menu from "../../assets/Menu.svg";

function Header() {
  const navigate = useNavigate();
  const Pages = [
    { id: "메인메뉴", url: "/main" },
    { id: "작성하기", url: "/writepage" },
    { id: "마이페이지", url: "/mypage" },
  ];

  return (
    <S.Wrapper>
      <img src={Logo} alt="대숲이형 로고" />
      <S.SearchBox>
        <S.Input />
        <img src={Magnifier} alt="검색 버튼" />
      </S.SearchBox>
      <S.ButtonBox>
        {Pages.map((page) => {
          return (
            <S.Button 
              onClick={() => navigate(page.url)}
              isTrue={window.location.pathname === page.url}
            >
              {page.id}
            </S.Button>
          );
        })}

        <S.Icon src={Bell} alt="알림 버튼" />
        <S.Icon src={Menu} alt="메뉴 버튼" />
      </S.ButtonBox>
    </S.Wrapper>
  );
}

export default Header;
