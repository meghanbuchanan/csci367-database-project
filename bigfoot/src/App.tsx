import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import HomePage from './routes/HomePage';

function App() {
  return (
    <BrowserRouter>
      <BaseLayout title="Bigfoot's guide to WA parks">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
