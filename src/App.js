import React from 'react'
import { ThemeProvider } from 'styled-components'

import Box from '@material-ui/core/Box'

const theme = {
  spacing: 4,
  palette: {
    primary: '#007bff',
  },
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        p={1}
        color={theme.palette.primary}
        border={1}
        borderColor={theme.palette.primary}
        borderRadius="borderRadius"
      >
        4px
      </Box>
      <Box
        p={2}
        border={1}
        borderColor={theme.palette.primary}
        borderRadius="borderRadius"
      >
        8px
      </Box>
      <Box
        p={-1}
        border={1}
        borderColor={theme.palette.primary}
        borderRadius="borderRadius"
      >
        -4px
      </Box>
    </ThemeProvider>
  )
}
