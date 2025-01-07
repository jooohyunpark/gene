import { BrowserRouter as Router } from 'react-router';
import Nav from '@/components/Nav';
import Header from '@/components/Header';
import Pages from '@/pages';
import { GlolbalStyle, AppLayout, PageLayout, MainLayout } from './styles';

const App = () => {
  return (
    <AppLayout>
      <GlolbalStyle />

      <Router>
        <Header />
        <Nav />

        <MainLayout>
          <PageLayout>
            <Pages />
          </PageLayout>
        </MainLayout>
      </Router>
    </AppLayout>
  );
};

export default App;
