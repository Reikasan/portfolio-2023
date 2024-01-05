import React from 'react';
import Slide from '@mui/material/Slide';
import { useScrollTrigger } from '@mui/material';

const ShowOnScroll: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={trigger}>
      {children}
    </Slide>
  );
}

export default ShowOnScroll;