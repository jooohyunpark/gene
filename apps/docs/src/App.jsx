import { BrowserRouter as Router } from 'react-router';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Pages from '@/pages';
import {
  GlolbalStyle,
  StyledApp,
  StyledMain,
  StyledArticle,
  StyledLayout,
} from './styles';

const App = () => {
  return (
    <StyledApp>
      <GlolbalStyle />

      <Router>
        <Nav />

        <StyledLayout>
          <StyledMain>
            <StyledArticle>
              <Pages />
            </StyledArticle>
          </StyledMain>

          <Footer />
        </StyledLayout>
      </Router>
    </StyledApp>
  );
};

export default App;
