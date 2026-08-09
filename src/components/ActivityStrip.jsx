import React from 'react';
import { Flame, Star, Circle, Clock } from 'lucide-react';
import './ActivityStrip.css';

export default function ActivityStrip({ activityStrip }) {
  // Calculate summary counts
  const coreCount = activityStrip.filter(item => item.mode === 'core').length;
  const stretchCount = activityStrip.filter(item => item.mode === 'stretch').length;

  return (
    <div className="activity-strip-card">
      <div className="strip-header">
        <div className="strip-title-group">
          <span className="strip-label">Past 7 Days Activity</span>
          <span className="strip-summary">
            <span className="summary-core">● {coreCount} Core</span>
            <span className="summary-divider">·</span>
            <span className="summary-stretch">★ {stretchCount} Stretch</span>
          </span>
        </div>
      </div>

      <div className="strip-days-grid">
        {activityStrip.map((item) => {
          const isToday = item.day === 12;
          const isCompleted = item.status === 'completed';
          const isStretch = item.mode === 'stretch';
          const isCore = item.mode === 'core';

          return (
            <div
              key={item.day}
              className={`day-col ${isToday ? 'is-today' : ''} ${isCompleted ? 'is-done' : ''}`}
            >
              <div className="day-indicator">
                {isCompleted ? (
                  isStretch ? (
                    <span className="icon-stretch" title="Stretch Day Completed">★</span>
                  ) : (
                    <span className="icon-core" title="Core Day Completed">●</span>
                  )
                ) : (
                  <span className="icon-pending" title="Pending Today">—</span>
                )}
              </div>
              <span className="day-name">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
