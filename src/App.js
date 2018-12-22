import React, { Component } from "react";
import ColorBlock from "./components/ColorBlock";
import styled from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import { device } from "./theme/BreakPoints";

const Title = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  padding: 0 1rem;
  margin: 0 auto;
  max-width: 1240px;
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: auto;
  }
`;

const Button = styled.button`
  background-color: papayawhip;
  border-radius: 3px;
  box-shadow: 1px 2px 1px grey;
  font-size: 18px;
  padding: 20px 40px;
  cursor: pointer;
  border: none;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    console.log(this);
    this.props.app.pageLoader(2);
  }

  render() {
    const { app } = this.props;
    const colors =
      app.data.data &&
      app.data.data.map(item => (
        <ColorBlock key={item.id} color={item.color} name={item.name} />
      ));

    return (
      <React.Fragment>
        <Title>COLORS</Title>
        <Container>
          <Grid>
            <GlobalStyle />
            {colors}
            <Button onClick={this.onClick}>KLICKA MIG!!!</Button>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
