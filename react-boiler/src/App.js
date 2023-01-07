import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import Home from './containers/Home';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Home />
    </StyledEngineProvider>
  );
}

export default App;
