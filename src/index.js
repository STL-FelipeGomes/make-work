import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, Box } from '@chakra-ui/react'
import App from './Components/App/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ChakraProvider>
    <Box m={window.innerWidth > 1000 ? '2rem' : '1rem'}>
      <App />
    </Box>
  </ChakraProvider>
)
