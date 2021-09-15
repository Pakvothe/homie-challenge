import './App.css';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import ContentBox from './components/contentBox';
import { AppContainer,RightContainer } from './app.styles';

const App = () => {
  return (
    <AppContainer>
      <Sidebar/>
      <RightContainer>
        <Navbar />
        <ContentBox />
      </RightContainer>
    </AppContainer>
  );
}

export default App;
