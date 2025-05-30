import styled from "styled-components";
import { mixinFlex, mixinFont, tagColor, colorGray } from "../style";

const StyledDiv = styled.div`
  ${mixinFlex('column', undefined, 'flex-start', '5px')};
`

const StyledImg = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-bottom: 3px;
  min-height: 225px;
`

const StyledSpan = styled.span`
  ${mixinFont('12px')};
  color: ${tagColor};
  border: 1px solid ${tagColor};
  padding: 4px 5px;
  border-radius: 3px;
`

const StyledDiv2 = styled.div`
  ${mixinFont('18px', 600)};
`

const StyledP = styled.p`
  ${mixinFont('12px')};
  color: ${colorGray};
`

export default function Content({ content }) {
  return (
    <StyledDiv className="content-container">
      <StyledImg src={content.img} alt={content.title} />
      <StyledSpan>모집중</StyledSpan>
      <StyledDiv2>{content.title}</StyledDiv2>
      <StyledP>{content.subtitle}</StyledP>
    </StyledDiv>
  );
}
