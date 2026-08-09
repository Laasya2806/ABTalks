import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ChallengeProvider } from './context/ChallengeContext';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import DayChallengePage from './pages/DayChallengePage';

export default function App() {
  return (
    <ChallengeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/day/:dayId" element={<DayChallengePage />} />
            <Route path="/day" element={<Navigate to="/day/12" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ChallengeProvider>
  );
}
