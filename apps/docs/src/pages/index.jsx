import { Routes, Route } from 'react-router';

import Home from '@/pages/Home';
import Color from '@/pages/Color';
import Typography from '@/pages/Typography';
import Spacing from '@/pages/Spacing';

const Pages = () => {
  return (
    <Routes>
      <Route path="/typography" element={<Typography />} />
      <Route path="/spacing" element={<Spacing />} />
      <Route path="/color" element={<Color />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Pages;
