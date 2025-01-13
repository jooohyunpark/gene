import { Routes, Route } from 'react-router';

import GDS from '@/pages/GDS';

import Color from '@/pages/foundation/Color';
import Typography from '@/pages/foundation/Typography';
import Spacing from '@/pages/foundation/Spacing';
import DesignTokens from '@/pages/foundation/DesignTokens';

import Button from '@/pages/components/Button';

const Pages = () => {
  return (
    <Routes>
      <Route path="/components/button" element={<Button />} />

      <Route path="/foundation/design-tokens" element={<DesignTokens />} />
      <Route path="/foundation/typography" element={<Typography />} />
      <Route path="/foundation/spacing" element={<Spacing />} />
      <Route path="/foundation/color" element={<Color />} />

      <Route path="/" element={<GDS />} />
    </Routes>
  );
};

export default Pages;
