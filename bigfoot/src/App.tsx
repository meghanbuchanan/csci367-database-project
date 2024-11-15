import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import HomePage from './routes/HomePage';
import SearchDetailsPage from './routes/SearchDetailsPage';
import SearchTrailNamePage from './routes/SearchTrailNamePage';
import ResultPage from './routes/ResultsPage';
import SelectionPage from './routes/SelectionPage';
import HikeInfoPage from './routes/HikeInfoPage';

function App() {
  return (
    <BrowserRouter>
      <BaseLayout title="Bigfoot's guide to WA parks">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<SearchDetailsPage />} />
          <Route path="/trail" element={<SearchTrailNamePage />} />
          <Route path="/results" element={<ResultPage />} />
          <Route path="/selection" element={<SelectionPage />} />
          <Route path="/hikeInfo" element={<HikeInfoPage />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
