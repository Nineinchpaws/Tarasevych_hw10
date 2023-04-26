import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ErrorHw from '../ErrorHw/ErrorHw';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorHwChild from '../ErrorHwChild/ErrorHwChild';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            <Route path='/' element={<ErrorHw />} />
            <Route path='/hw' element={<ErrorHw />} />
            <Route path='/child' element={<ErrorHwChild />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
