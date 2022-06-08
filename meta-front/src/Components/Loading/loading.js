import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';

const Loading = () => {
    return (
        <Stack sx={{ width: '80%', color: 'grey.500' }} spacing={2}>
          <LinearProgress color="primary" />
        </Stack>
      );
}

export default Loading

