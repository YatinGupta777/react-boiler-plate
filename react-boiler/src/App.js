import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Home2 from './containers/Home2';
import NotFound from './containers/NotFound';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
