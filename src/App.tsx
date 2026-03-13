import { useContext } from 'react';
import styled from 'styled-components';
import ColorBlock from './components/ColorBlock';
import GlobalStyle from './theme/GlobalStyle';
import { device } from './theme/BreakPoints';
import { AppContext } from './AppProvider';

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

const App: React.FC = () => {
  const app = useContext(AppContext);

  const handleClick = () => {
    app?.pageLoader(2);
  };

  const colors = app?.data.data?.map(item => (
    <ColorBlock key={item.id} color={item.color} name={item.name} />
  ));

  return (
    <>
      <GlobalStyle />
      <Title>COLORS</Title>
      <Container>
        <Grid>
          {colors}
          <Button onClick={handleClick}>KLICKA MIG!!!</Button>
        </Grid>
      </Container>
    </>
  );
};

export default App;
