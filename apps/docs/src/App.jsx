import { BrowserRouter as Router } from 'react-router';
import Nav from '@/components/Nav';
import Pages from '@/pages';
import { GlolbalStyle, AppLayout, NavLayout, PageLayout } from './styles';

const App = () => {
  return (
    <AppLayout>
      <GlolbalStyle />

      <Router>
        <NavLayout>
          <Nav />
        </NavLayout>

        <PageLayout>
          <Pages />
        </PageLayout>
      </Router>
    </AppLayout>
  );
};

export default App;
