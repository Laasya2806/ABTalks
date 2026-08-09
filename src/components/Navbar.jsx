import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame, LayoutDashboard, Calendar, RefreshCw } from 'lucide-react';
import { useChallenge } from '../context/ChallengeContext';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const { resetProgress } = useChallenge();

  const searchParams = new URLSearchParams(location.search);
  const activeTrack = searchParams.get('track');

  const dashboardLink = activeTrack ? `/dashboard?track=${activeTrack}` : '/#tracks';
  const day12Link = activeTrack ? `/day/12?track=${activeTrack}` : '/#tracks';

  const handleNavClick = (e, target) => {
    if (target === '/#tracks') {
      if (location.pathname === '/') {
        e.preventDefault();
        const el = document.getElementById('tracks');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.hash = 'tracks';
        }
      }
    }
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="brand-icon">
            <Flame size={20} color="#10B981" />
          </div>
          <span className="brand-title">ABTalks</span>
        </Link>

        <nav className="navbar-nav">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Overview
          </Link>
          <Link
            to={dashboardLink}
            onClick={(e) => handleNavClick(e, dashboardLink)}
            className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
          >
            <LayoutDashboard size={16} />
            Dashboard
          </Link>
          <Link
            to={day12Link}
            onClick={(e) => handleNavClick(e, day12Link)}
            className={`nav-link ${location.pathname.startsWith('/day/') ? 'active' : ''}`}
          >
            <Calendar size={16} />
            Day 12
          </Link>
        </nav>

        <button
          onClick={resetProgress}
          className="reset-btn"
          title="Reset local storage state for testing"
        >
          <RefreshCw size={14} />
          <span className="reset-text">Reset State</span>
        </button>
      </div>
    </header>
  );
}
