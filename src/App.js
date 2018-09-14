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

class App extends Component {
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
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
