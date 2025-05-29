import React from 'react';

const moods = [
  { emoji: '😄', label: 'Happy' },
  { emoji: '😐', label: 'Neutral' },
  { emoji: '😢', label: 'Sad' },
  { emoji: '😠', label: 'Angry' },
  { emoji: '😴', label: 'Tired' },
];

function MoodSelector({ onSelectMood }) {
  return (
    <div className="my-4">
      <h3>How do you feel today?</h3>
      <div className="d-flex gap-3">
        {moods.map(({ emoji, label }) => (
          <button
            key={label}
            type="button"
            className="btn btn-outline-primary fs-2"
            onClick={() => onSelectMood(label)}
            title={label}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoodSelector;
