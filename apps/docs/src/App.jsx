import { BrowserRouter as Router } from 'react-router';
import Nav from '@/components/Nav';
import Pages from '@/pages';
import { GlolbalStyle, StyledApp, StyledMain, StyledArticle } from './styles';

const App = () => {
  return (
    <StyledApp>
      <GlolbalStyle />

      <Router>
        <Nav />

        <StyledMain>
          <StyledArticle>
            <Pages />
          </StyledArticle>
        </StyledMain>
      </Router>
    </StyledApp>
  );
};

export default App;
