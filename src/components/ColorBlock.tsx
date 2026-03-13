import styled from 'styled-components';

interface ColorBlockProps {
  color: string;
  name: string;
}

const Box = styled.div<{ $color: string }>`
  background-color: ${p => p.$color};
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxText = styled.p`
  text-shadow: 1px 1px 1px #fff, -2px -2px 1px #fff, -2px 2px 1px #fff,
    2px -2px 1px #fff;
`;

const ColorBlock: React.FC<ColorBlockProps> = ({ color, name }) => (
  <Box $color={color}>
    <BoxText>{name}</BoxText>
  </Box>
);

export default ColorBlock;
