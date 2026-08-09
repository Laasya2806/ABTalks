import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers } from 'lucide-react';
import { normalizeTrackKey } from '../data/mockData';
import './TrackSwitcher.css';

export default function TrackSwitcher({ currentTrack, basePath = '/dashboard' }) {
  const navigate = useNavigate();
  const activeKey = normalizeTrackKey(currentTrack);

  const tracks = [
    { key: 'web', label: 'Web Dev' },
    { key: 'dsa', label: 'DSA' },
    { key: 'aiml', label: 'AI / ML' }
  ];

  const handleSelect = (key) => {
    if (key === activeKey) return;
    navigate(`${basePath}?track=${key}`);
  };

  return (
    <div className="track-switcher">
      <span className="switcher-label font-mono">
        <Layers size={13} />
        <span>TRACK:</span>
      </span>
      <div className="switcher-pills">
        {tracks.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => handleSelect(t.key)}
            className={`switcher-pill ${activeKey === t.key ? 'is-active' : ''}`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
