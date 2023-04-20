import React from 'react';
import Container from '@mui/material/Container';
import { Box, Stack, Typography } from '@mui/material';

const PageTitleView = ({ title, subtitle }) => {
  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(to right top, #60a5fa, #5697fb, #5388fa, #5878f7, #6366f1)',
        color: 'white',
        py: '20px',
        width: '100%'
      }}
    >
      <Container>
        <Stack alignItems='center' spacing={3} textAlign='center'>
          <Typography variant='h4'>{title}</Typography>
          <Typography variant='subtitle2' sx={{ marginTop: '0!important' }}>
            {subtitle}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default PageTitleView;