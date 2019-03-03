import React from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import theme from "../theme";

import Meta from "./Meta";
import Header from "./Header";

const StyledPage = styled.div`
  background: white;
  color: ${({ theme }) => theme.black};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
