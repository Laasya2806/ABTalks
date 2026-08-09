import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Flame, Star, Trophy, Sparkles, TrendingUp, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { useChallenge } from '../context/ChallengeContext';
import { getTrackChallenge } from '../data/mockData';
import MissionCard from '../components/MissionCard';
import ActivityStrip from '../components/ActivityStrip';
import TrackSwitcher from '../components/TrackSwitcher';
import './DashboardPage.css';

export default function DashboardPage() {
  const [searchParams] = useSearchParams();
  const trackParam = searchParams.get('track');
  const { getStudentData } = useChallenge();

  const challenge = getTrackChallenge(trackParam);
  const studentData = getStudentData(trackParam);

  // Dynamic time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning 👋';
    if (hour < 18) return 'Good afternoon 👋';
    return 'Good evening 👋';
  };

  const completionPercent = Math.round((studentData.currentDay / studentData.totalDays) * 100);
  const showStretchNudge = studentData.consecutiveCoreDays >= 5 && !studentData.isDay12Completed;

  return (
    <div className="dashboard-page animate-fade-in">
      <div className="container dashboard-container">
        
        {/* HEADER & GREETING */}
        <section className="dashboard-header-section">
          <div className="greeting-row">
            <div>
              <h1 className="user-greeting">{getGreeting()}</h1>
              <div style={{ marginTop: '0.4rem' }}>
                <TrackSwitcher currentTrack={trackParam} basePath="/dashboard" />
              </div>
            </div>
            <div className="day-progress-pill font-mono">
              <span>Day {studentData.currentDay} of {studentData.totalDays}</span>
            </div>
          </div>
        </section>

        {/* PRIMARY ACTION: TODAY'S MISSION CARD */}
        <section className="dashboard-section primary-mission-section">
          <div className="section-label-row">
            <span className="section-tag-bold font-mono">TODAY'S MISSION</span>
            {studentData.isDay12Completed && (
              <span className="status-badge-completed">
                <CheckCircle2 size={13} /> Completed Today
              </span>
            )}
          </div>

          <MissionCard
            challenge={challenge}
            isCompleted={studentData.isDay12Completed}
            completedMode={studentData.completedMode}
          />
        </section>

        {/* STRETCH NUDGE ENCOURAGEMENT BANNER (Edge case: consecutive Core days) */}
        {showStretchNudge && (
          <section className="nudge-banner animate-fade-in">
            <div className="nudge-icon">
              <Sparkles size={20} color="#A3E635" />
            </div>
            <div className="nudge-body">
              <h4>Consistency Milestone! 🔥</h4>
              <p>
                You've shown up {studentData.consecutiveCoreDays} days in a row. Your baseline is rock-solid. Ready to attempt a <strong>Stretch</strong> challenge today?
              </p>
            </div>
            <Link to={`/day/12?track=${challenge.trackId || 'web'}`} className="btn btn-secondary btn-sm nudge-cta">
              Try Stretch
            </Link>
          </section>
        )}

        {/* METRICS ROW (CONSISTENCY & GROWTH) */}
        <section className="dashboard-section metrics-section">
          <div className="metrics-grid">
            {/* CONSISTENCY METRIC */}
            <div className="metric-card metric-consistency">
              <div className="metric-icon-box orange">
                <Flame size={20} />
              </div>
              <div className="metric-content">
                <span className="metric-value">{studentData.consistencyStreak} Days Building</span>
                <span className="metric-label">Consistency Streak 🔥</span>
              </div>
            </div>

            {/* GROWTH METRIC */}
            <div className="metric-card metric-growth">
              <div className="metric-icon-box amber">
                <Star size={20} />
              </div>
              <div className="metric-content">
                <span className="metric-value">{studentData.stretchCount} Days</span>
                <span className="metric-label">Growth (Stretch Days) ↗</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7-DAY COMPACT ACTIVITY STRIP */}
        <section className="dashboard-section activity-section">
          <ActivityStrip activityStrip={studentData.activityStrip} />
        </section>

        {/* SECONDARY ESSENTIALS: PROGRESS & STANDING */}
        <section className="dashboard-section secondary-essentials">
          <div className="essentials-grid">
            {/* OVERALL COMPLETION */}
            <div className="card essential-card">
              <div className="essential-header">
                <span className="essential-title">Overall Challenge</span>
                <span className="essential-val font-mono">{completionPercent}%</span>
              </div>
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${completionPercent}%` }}
                />
              </div>
              <div className="essential-footer font-mono">
                {studentData.currentDay} / {studentData.totalDays} Builds Completed
              </div>
            </div>

            {/* STUDENT STANDING */}
            <div className="card essential-card">
              <div className="essential-header">
                <span className="essential-title">Student Standing</span>
                <Trophy size={16} color="#A3E635" />
              </div>
              <div className="standing-value">
                {studentData.standingPercentile}
              </div>
              <div className="essential-footer">
                Based on consistency + growth breakthroughs
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
