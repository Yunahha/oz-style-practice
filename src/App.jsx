import styled, { createGlobalStyle } from "styled-components";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import { mixinFlex } from "./style";

const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
`

const StyledSection = styled.section`
  ${mixinFlex(undefined, 'center', 'center', '20px', 'wrap')};
  padding: 20px 40px;
`


function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Header />
        <StyledSection>
          {contents.map((el) => (
            <Content key={el.id} content={el} />
          ))}
        </StyledSection>
      </main>
    </> 
  );
}

export default App;
