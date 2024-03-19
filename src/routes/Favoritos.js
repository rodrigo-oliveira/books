import styled from 'styled-components';
import Search from '../components/Search';

const AppContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`;

function Favoritos() {
  return (
    <AppContainer>
      <Search />
    </AppContainer>
  );
}

export default Favoritos;
