import { BrowserRouter, Routes, Route } from 'react-router';

import Home from '@/pages/Home';
import Color from '@/pages/Color';

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/color" element={<Color />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
