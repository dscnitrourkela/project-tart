import './App.css';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`
  h-60
  m-2.5
  rounded-2xl
  flex
  flex-col
  justify-center
  items-center
  `};
`;


function App() {
  return (
    <Container>
      <h1 className="text-3xl font-bold underline text-red-600">
      Project Tart
    </h1>
    </Container>
  );
}

export default App;
