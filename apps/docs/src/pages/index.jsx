import { Routes, Route } from 'react-router';

import About from '@/pages/About';
import Color from '@/pages/Color';
import Typography from '@/pages/Typography';
import Spacing from '@/pages/Spacing';

const Pages = () => {
  return (
    <Routes>
      <Route path="/foundation/typography" element={<Typography />} />
      <Route path="/foundation/spacing" element={<Spacing />} />
      <Route path="/foundation/color" element={<Color />} />
      <Route path="/" element={<About />} />
    </Routes>
  );
};

export default Pages;
