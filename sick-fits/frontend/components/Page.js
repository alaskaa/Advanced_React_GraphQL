import React from "react";
import Meta from "./Meta";
import Header from "./Header";
import styled from "styled-components";

const MyButton = styled.button`
  background: red;
  font-size: ${props => (props.huge ? "100px" : "50px")};
  span {
    font-size: 100px;
  }
`;

class Page extends React.Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton huge>hALLO</MyButton>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
