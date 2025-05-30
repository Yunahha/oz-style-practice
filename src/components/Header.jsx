import styled from "styled-components";
import { mixinFlex, mixinFont } from "../style";

const StyledHeader = styled.header`
  ${mixinFlex(undefined, 'space-between', 'center')};
  padding: 20px 20px;
  background-color: black;
`

const StyledUl = styled.ul`
  ${mixinFlex(undefined, 'center', 'center', '20px')};
`

const StyledLi = styled.li`
  ${mixinFont('16px', '400')}
`

export default function Header() {
  return (
    <StyledHeader>
      <h1>OZ코딩스쿨</h1>
      <StyledUl>
        <StyledLi>로그인</StyledLi>
        <StyledLi>회원가입</StyledLi>
        <StyledLi>내클래스</StyledLi>
      </StyledUl>
    </StyledHeader>
  );
}