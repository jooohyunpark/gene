import { Routes, Route } from 'react-router';

import GDS from '@/pages/GDS';

import Color from '@/pages/foundation/Color';
import Typography from '@/pages/foundation/Typography';
import Spacing from '@/pages/foundation/Spacing';
import DesignTokens from '@/pages/foundation/DesignTokens';

import Button from '@/pages/components/Button';
import Link from '@/pages/components/Link';

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<GDS />} />

      <Route path="/foundation/design-tokens" element={<DesignTokens />} />
      <Route path="/foundation/typography" element={<Typography />} />
      <Route path="/foundation/spacing" element={<Spacing />} />
      <Route path="/foundation/color" element={<Color />} />

      <Route path="/components/button" element={<Button />} />
      <Route path="/components/link" element={<Link />} />
    </Routes>
  );
};

export default Pages;
