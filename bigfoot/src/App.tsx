import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import HomePage from './routes/HomePage';
import SearchDetailsPage from './routes/SearchDetailsPage';
import SearchTrailNamePage from './routes/SearchTrailNamePage';
import ResultPage from './routes/ResultsPage';

function App() {
  return (
    <BrowserRouter>
      <BaseLayout title="Bigfoot's guide to WA parks">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<SearchDetailsPage />} />
          <Route path="/trail" element={<SearchTrailNamePage />} />
          <Route path="/results" element={<ResultPage />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
