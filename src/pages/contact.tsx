import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

const Contact = () => {
  return (
    <div>
      <Typography sx={{ fontSize: '18px' }}>Contact</Typography>
      <Divider sx={{ mb: 3, opacity: 0.6, background: '#fff' }} />
      <Box mt={4}>
        <h3>
          Mail Address:{' '}
          <a
            href='mailto:ayushtripathi5014@gmail.com'
            style={{ color: 'rgba(0,255,12,1)' }}
          >
            ayushtripathi5014@gmail.com
          </a>
        </h3>
        <p>
          Resume Link:{' '}
          <a
            href='https://drive.google.com/file/d/13qwJhzUEAzXA28_doKZ8KTbOpIVfg868/view?usp=drive_link'
            target='_blank'
            style={{ color: 'rgba(0,255,12,1)' }}
          >
            https://drive.google.com/file/d/13qwJhzUEAzXA28_doKZ8KTbOpIVfg868/view?usp=drive_link
          </a>{' '}
        </p>
      </Box>
    </div>
  );
};

export default Contact;
