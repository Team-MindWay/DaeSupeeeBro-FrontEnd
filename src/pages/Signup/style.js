import styled from 'styled-components'; // styled-components 라이브러리 import

// 전체 컨테이너 스타일
export const Container = styled.div`
  width: 100%;                                // 화면 가로 전체를 채우도록 설정
  height: 100vh;                              // 화면 세로 전체를 채우도록 설정
  background-color: #fff;                    // 배경색 설정 (흰색)
  padding: 20px;                            // 내부 여백 설정 (상하좌우 20px)
  border: 1px solid #ddd;                    // 테두리 설정 (1px 두께, 회색 실선)
  border-radius: 10px;                        // 테두리 둥글게 설정 (반지름 10px)
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);   // 그림자 설정
  display: flex;                             // flexbox 사용
  flex-direction: column;                   // 아이템들을 세로로 배치
  justify-content: center;                  // 세로 중앙 정렬
  align-items: center;                      // 가로 중앙 정렬
`;

// 제목 스타일
export const Title = styled.h2`
  margin-top: 0;                              // 위쪽 여백 제거
  color: #333;                                // 텍스트 색상 설정 (진한 회색)
`;

// 입력 필드 스타일
export const Input = styled.input`
  width: 300px;                                // 입력 필드 가로 길이 설정
  height: 40px;                               // 입력 필드 세로 길이 설정
  margin-bottom: 10px;                       // 아래쪽 여백 설정 (10px)
  padding: 10px;                             // 내부 여백 설정 (10px)
  border: 1px solid #ccc;                    // 테두리 설정 (1px 두께, 회색 실선)
  border-radius: 5px;                        // 테두리 둥글게 설정 (반지름 5px)
`;

// 버튼 스타일
export const Button = styled.button`
  width: 300px;                                // 버튼 가로 길이 설정
  height: 40px;                               // 버튼 세로 길이 설정
  background-color: #34C759;                  // 버튼 배경색 설정 (녹색)
  color: #fff;                                // 버튼 텍스트 색상 설정 (흰색)
  padding: 10px;                             // 버튼 내부 여백 설정 (상하좌우 10px)
  border: none;                               // 버튼 테두리 제거
  border-radius: 10px;                        // 버튼 모서리 둥글게 설정 (반지름 10px)
  cursor: pointer;                           // 버튼 위에 마우스 올렸을 때 커서 변경 (손가락 모양)
`;