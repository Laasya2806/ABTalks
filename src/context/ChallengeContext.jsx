import React, { createContext, useContext, useState, useEffect } from 'react';
import { MOCK_TRACK_STUDENT_DATA, normalizeTrackKey } from '../data/mockData';

const ChallengeContext = createContext();

const STORAGE_KEY = 'abtalks_student_state_v2';

export const ChallengeProvider = ({ children }) => {
  const [tracksData, setTracksData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      // Fallback to initial mock data if JSON parse fails
    }
    return MOCK_TRACK_STUDENT_DATA;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tracksData));
    } catch (e) {
      // Storage error fallback
    }
  }, [tracksData]);

  const getStudentData = (trackParam) => {
    const key = normalizeTrackKey(trackParam);
    return tracksData[key] || MOCK_TRACK_STUDENT_DATA[key] || MOCK_TRACK_STUDENT_DATA.web;
  };

  const completeDay12 = (trackParam, selectedMode, githubUrl, linkedinUrl) => {
    const key = normalizeTrackKey(trackParam);

    setTracksData(prev => {
      const currentTrackData = prev[key] || MOCK_TRACK_STUDENT_DATA[key];
      if (currentTrackData.isDay12Completed) return prev;

      const isStretch = selectedMode === 'stretch';
      const updatedStreak = currentTrackData.consistencyStreak + 1;
      const updatedStretchCount = isStretch ? currentTrackData.stretchCount + 1 : currentTrackData.stretchCount;
      const updatedConsecutiveCore = isStretch ? 0 : currentTrackData.consecutiveCoreDays + 1;

      const updatedActivity = currentTrackData.activityStrip.map(item => {
        if (item.day === 12) {
          return {
            ...item,
            mode: selectedMode,
            status: 'completed'
          };
        }
        return item;
      });

      const updatedTrackData = {
        ...currentTrackData,
        isDay12Completed: true,
        completedMode: selectedMode,
        consistencyStreak: updatedStreak,
        stretchCount: updatedStretchCount,
        consecutiveCoreDays: updatedConsecutiveCore,
        activityStrip: updatedActivity,
        lastSubmission: {
          githubUrl,
          linkedinUrl,
          timestamp: new Date().toISOString()
        }
      };

      return {
        ...prev,
        [key]: updatedTrackData
      };
    });
  };

  const resetProgress = () => {
    setTracksData(MOCK_TRACK_STUDENT_DATA);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <ChallengeContext.Provider
      value={{
        studentData: getStudentData('web'),
        getStudentData,
        completeDay12,
        resetProgress
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};

export const useChallenge = () => useContext(ChallengeContext);
