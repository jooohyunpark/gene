import { Routes, Route } from 'react-router';

import GDS from '@/pages/GDS';
import Color from '@/pages/Color';
import Typography from '@/pages/Typography';
import Spacing from '@/pages/Spacing';
import DesignTokens from '@/pages/DesignTokens';

const Pages = () => {
  return (
    <Routes>
      <Route path="/foundation/design-tokens" element={<DesignTokens />} />
      <Route path="/foundation/typography" element={<Typography />} />
      <Route path="/foundation/spacing" element={<Spacing />} />
      <Route path="/foundation/color" element={<Color />} />
      <Route path="/" element={<GDS />} />
    </Routes>
  );
};

export default Pages;
