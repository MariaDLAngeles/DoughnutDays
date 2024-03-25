import './App.css'
import { MantineProvider } from '@mantine/core';
import LandingPage from './LandingPage';
import '@mantine/core/styles.css';

function App() {


  return (
    <>
    <MantineProvider>
      <LandingPage />
    </MantineProvider>
    </>
  )
}

export default App
