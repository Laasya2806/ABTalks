import React, { useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Clock, Code2, Github, Linkedin, Send, Sparkles } from 'lucide-react';
import { useChallenge } from '../context/ChallengeContext';
import { getTrackChallenge } from '../data/mockData';
import CoreStretchCard from '../components/CoreStretchCard';
import SuccessModal from '../components/SuccessModal';
import TrackSwitcher from '../components/TrackSwitcher';
import './DayChallengePage.css';

export default function DayChallengePage() {
  const navigate = useNavigate();
  const { dayId } = useParams();
  const [searchParams] = useSearchParams();
  const trackParam = searchParams.get('track');

  const { getStudentData, completeDay12 } = useChallenge();
  const challenge = getTrackChallenge(trackParam);
  const studentData = getStudentData(trackParam);

  // Local state for mode selection and inputs
  const getCleanSubmissionUrl = (url) => (url && !url.includes('arjunmehta') ? url : '');
  const [selectedMode, setSelectedMode] = useState(studentData.completedMode || 'core');
  const [githubUrl, setGithubUrl] = useState(getCleanSubmissionUrl(studentData.lastSubmission?.githubUrl));
  const [linkedinUrl, setLinkedinUrl] = useState(getCleanSubmissionUrl(studentData.lastSubmission?.linkedinUrl));
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formError, setFormError] = useState('');

  // Mode-specific dynamic content
  const activeContent = selectedMode === 'stretch'
    ? (challenge.stretchContent || challenge)
    : (challenge.coreContent || challenge);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    if (!githubUrl.trim()) {
      setFormError('Please provide your GitHub repository or commit URL.');
      return;
    }
    if (!linkedinUrl.trim()) {
      setFormError('Please provide your LinkedIn post URL.');
      return;
    }

    setIsSubmitting(true);

    // Simulate mock submission network latency
    setTimeout(() => {
      completeDay12(trackParam, selectedMode, githubUrl, linkedinUrl);
      setIsSubmitting(false);
      
      // Programmatically reset scroll to top before opening modal
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
      
      setShowSuccessModal(true);
    }, 600);
  };

  return (
    <div className="day-page animate-fade-in">
      <div className="container day-container">
        
        {/* BACK NAVIGATION */}
        <div className="nav-back-row">
          <Link to={`/dashboard?track=${challenge.trackId || 'web'}`} className="btn btn-secondary btn-sm back-btn">
            <ArrowLeft size={16} />
            <span>Back to Dashboard</span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TrackSwitcher currentTrack={trackParam} basePath={`/day/${challenge.id}`} />
            <span className="badge badge-orange font-mono">DAY {challenge.id}</span>
          </div>
        </div>

        {/* HEADER */}
        <header className="day-header-card">
          <div className="day-track-info">
            <Code2 size={16} className="track-icon" />
            <span>{challenge.track} Track</span>
            <span className="info-dot">·</span>
            <Clock size={14} />
            <span>{activeContent.estimatedTime || challenge.estimatedTime}</span>
            <span className="info-dot">·</span>
            <span className="pill-diff">{challenge.difficulty}</span>
          </div>

          <h1 className="day-challenge-title">{activeContent.title}</h1>
          <p className="day-challenge-desc">{activeContent.description}</p>
        </header>

        {/* CORE / STRETCH SELECTION */}
        <CoreStretchCard
          selectedMode={selectedMode}
          onSelectMode={setSelectedMode}
          coreOption={challenge.coreOption}
          stretchOption={challenge.stretchOption}
        />

        {/* REQUIREMENTS CHECKLIST */}
        <section className="card checklist-section">
          <h3 className="checklist-heading">
            {selectedMode === 'stretch' ? "★ Stretch Challenge Requirements" : "● Core Challenge Requirements"}
          </h3>
          <ul className="checklist-items">
            {(activeContent.checklist || challenge.checklist).map((item, idx) => (
              <li key={idx}>
                <CheckCircle2 size={16} className="check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* PROOF OF WORK FORM */}
        <section className="card proof-form-section">
          <h3 className="form-heading">Proof of Work — Build → Ship → Show</h3>
          <p className="form-subheading">
            Your work should be visible. Submit your GitHub repository commit and LinkedIn post to build your public track record.
          </p>

          <form onSubmit={handleSubmit} className="proof-form">
            {formError && (
              <div className="form-error-alert font-mono">
                ⚠ {formError}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="githubUrl" className="form-label">
                <Github size={16} />
                <span>GitHub Commit / Repository URL</span>
              </label>
              <input
                id="githubUrl"
                type="text"
                className="form-input font-mono"
                placeholder="https://github.com/username/repo/commit/..."
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="linkedinUrl" className="form-label">
                <Linkedin size={16} />
                <span>LinkedIn Post URL</span>
              </label>
              <input
                id="linkedinUrl"
                type="text"
                className="form-input font-mono"
                placeholder="https://linkedin.com/posts/username-..."
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn btn-primary submit-btn ${selectedMode === 'stretch' ? 'stretch-submit' : ''}`}
            >
              {isSubmitting ? (
                <span>Recording Proof...</span>
              ) : (
                <>
                  <span>
                    Submit & Continue ({selectedMode === 'stretch' ? '★ Stretch' : '● Core'})
                  </span>
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </section>

      </div>

      {/* SUCCESS MODAL */}
      {showSuccessModal && (
        <SuccessModal
          trackKey={challenge.trackId || 'web'}
          mode={selectedMode}
          streak={studentData.consistencyStreak}
          stretchCount={studentData.stretchCount}
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </div>
  );
}
