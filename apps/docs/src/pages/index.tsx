import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';

import GDS from '@/pages/GDS';

import Color from '@/pages/foundation/Color';
import Typography from '@/pages/foundation/Typography';
import Spacing from '@/pages/foundation/Spacing';
import DesignTokens from '@/pages/foundation/DesignTokens';

import Button from '@/pages/components/Button';
import Link from '@/pages/components/Link';
import Card from '@/pages/components/Card';
import Tag from '@/pages/components/Tag';
import Table from '@/pages/components/Table';
import Input from '@/pages/components/Input';

const Pages = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<GDS />} />

      <Route path="/foundation/design-tokens" element={<DesignTokens />} />
      <Route path="/foundation/typography" element={<Typography />} />
      <Route path="/foundation/spacing" element={<Spacing />} />
      <Route path="/foundation/color" element={<Color />} />

      <Route path="/components/button" element={<Button />} />
      <Route path="/components/card" element={<Card />} />
      <Route path="/components/link" element={<Link />} />
      <Route path="/components/tag" element={<Tag />} />
      <Route path="/components/Table" element={<Table />} />
      <Route path="/components/Input" element={<Input />} />
    </Routes>
  );
};

export default Pages;
