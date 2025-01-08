import styled from 'styled-components';
import { motion } from 'motion/react';
import { navWidth, ContentPadding, MediaAbove } from '@/styles/js';
import { space } from '@gene/token';

export const StyledNav = styled(motion.nav)`
  width: ${navWidth}px;
  height: 100%;
  overflow-y: scroll;
  background: gray;

  ${ContentPadding()};

  ${MediaAbove('md')} {
  }
`;
