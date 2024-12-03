import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import HomePage from './routes/HomePage';
import SearchDetailsPage from './routes/SearchDetailsPage';
import SearchTrailNamePage from './routes/SearchTrailNamePage';
import SelectionPage from './routes/SelectionPage';
import HikeInfoPage from './routes/HikeInfoPage';

/**
 * The main application component that sets up routing for Bigfoot's Guide to WA Parks.
 * This component uses React Router for navigation and organizes pages within a base layout.
 *
 * Pages include:
 * - HomePage: The landing page of the application.
 * - SearchDetailsPage: A page for searching hikes based on detail filters.
 * - SearchTrailNamePage: A page for searching hikes by trail name.
 * - SelectionPage: A general selection page for displaying search results.
 * - HikeInfoPage: A page displaying detailed information about a specific hike.
 */
function App() {
  return (
    <BrowserRouter>
      <BaseLayout title="Bigfoot's Guide to WA Parks">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<SearchDetailsPage />} />
          <Route path="/name" element={<SearchTrailNamePage />} />
          <Route path="/selection" element={<SelectionPage />} />
          <Route path="/hikeInfo/:hikeId" element={<HikeInfoPage />} />
          <Route path="/names/search" element={<SelectionPage />} />
          <Route path="/details/search" element={<SelectionPage />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
