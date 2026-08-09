import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Star, Code, Cpu, Sparkles, Code2, GitCommit, Share2, CheckCircle2 } from 'lucide-react';
import { MOCK_TRACKS } from '../data/mockData';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-page animate-fade-in">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge badge-orange">
                <Flame size={14} /> ABTALKS — THE 60-DAY CODING CHALLENGE
              </span>
            </div>

            <h1 className="hero-title">
              60 DAYS. 60 BUILDS.<br />
              <span className="highlight-text">ONE STRONGER YOU.</span>
            </h1>

            <p className="hero-subtitle">
              A daily engineering system that turns consistency into visible proof. Choose your track, complete real daily challenges, and build a public track record recruiters can actually see.
            </p>

            <div className="hero-cta-container">
              <div className="hero-cta-group">
                <a href="#tracks" className="btn btn-primary hero-btn">
                  <span>Choose Your Track</span>
                  <ArrowRight size={18} />
                </a>
              </div>
              <p className="hero-subtext font-mono">
                Web Development · DSA & Problem Solving · AI & Machine Learning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUILD -> SHIP -> SHOW SECTION */}
      <section className="build-ship-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag font-mono">THE 60-DAY CAREER ENGINE</span>
            <h2 className="section-heading">Build → Ship → Show</h2>
            <p className="section-desc">
              Transforming tutorial passive learning into undeniable engineering proof.
            </p>
          </div>

          <div className="build-ship-grid">
            <div className="framework-card">
              <div className="framework-icon-box">
                <Code2 size={22} />
              </div>
              <span className="framework-step-badge font-mono">STEP 01</span>
              <h3 className="framework-title">BUILD</h3>
              <p className="framework-tagline">Daily Engineering Prompts</p>
              <p className="framework-desc">
                Complete structured daily coding challenges tailored to your chosen technical track.
              </p>
            </div>

            <div className="framework-card">
              <div className="framework-icon-box">
                <GitCommit size={22} />
              </div>
              <span className="framework-step-badge font-mono">STEP 02</span>
              <h3 className="framework-title">SHIP</h3>
              <p className="framework-tagline">Version Controlled Code</p>
              <p className="framework-desc">
                Push your daily working implementations directly to your public GitHub repository.
              </p>
            </div>

            <div className="framework-card">
              <div className="framework-icon-box">
                <Share2 size={22} />
              </div>
              <span className="framework-step-badge font-mono">STEP 03</span>
              <h3 className="framework-title">SHOW</h3>
              <p className="framework-tagline">Public Career Visibility</p>
              <p className="framework-desc">
                Publish daily proof of work on LinkedIn to demonstrate real technical growth to engineering teams.
              </p>
            </div>
          </div>

          <div className="reinforce-banner font-mono">
            💡 <strong>60 days of verified proof</strong> is more valuable than another unfinished tutorial.
          </div>
        </div>
      </section>

      {/* HOW THE 60-DAY CHALLENGE WORKS / TRACKS SECTION */}
      <section id="tracks" className="tracks-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag font-mono">CHALLENGE TRACKS</span>
            <h2 className="section-heading">Select Your Specialized Path</h2>
            <p className="section-desc">
              Pick your engineering focus, solve daily prompts, and create a visible body of work over 60 consecutive days.
            </p>
          </div>

          <div className="tracks-grid">
            {MOCK_TRACKS.map((track) => (
              <div key={track.id} className="track-card">
                <div className="track-header">
                  <div className="track-icon-wrapper">
                    {track.icon === 'Code' && <Code size={20} />}
                    {track.icon === 'Cpu' && <Cpu size={20} />}
                    {track.icon === 'Sparkles' && <Sparkles size={20} />}
                  </div>
                  <span className="track-student-count font-mono">{track.activeCount}</span>
                </div>
                <h3 className="track-name">{track.name}</h3>
                <p className="track-positioning">{track.positioning}</p>
                <div className="track-progression-box font-mono">
                  {track.progression}
                </div>
                <p className="track-description">{track.description}</p>
                <div className="track-outcome-box">
                  <strong>{track.outcome}</strong>
                </div>
                <div className="track-action">
                  <Link to={`/dashboard?track=${track.queryParam}`} className="btn btn-secondary btn-sm">
                    <span>Explore Track</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bottom-cta-banner">
            <div className="banner-content">
              <h3>Ready to start Day 12 of your 60-day journey?</h3>
              <p>Experience the track-aware student challenge experience now.</p>
            </div>
            <a href="#tracks" className="btn btn-primary">
              <span>Choose Track to Start</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
