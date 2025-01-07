import Nav from '@/components/Nav';
import Pages from '@/pages';

import { GlolbalStyle, AppLayout } from './styles';

const App = () => {
  return (
    <>
      <GlolbalStyle />

      <Nav />

      <AppLayout>
        <Pages />
      </AppLayout>
    </>
  );
};

export default App;
