import styled from 'styled-components';
import Search from '../components/Search';
import LastReleases from '../components/LastReleases';

const AppContainer = styled.div`
  width: 100%;
`;

function Home() {
  return (
    <AppContainer>
      <Search />
      <LastReleases />
    </AppContainer>
  );
}

export default Home;
