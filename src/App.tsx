import React, { useState } from 'react';
import MoodSelector from './components/MoodSelector';

function App() {
  const [selectedMood, setSelectedMood] = useState(null);

  function handleSelectMood(mood) {
    setSelectedMood(mood);
    // save mood logic here
  }

  return (
    <div className="container mt-5">
      <h1>Daily Mood Tracker</h1>
      <MoodSelector onSelectMood={handleSelectMood} />
      {selectedMood && <p>Your mood today: <strong>{selectedMood}</strong></p>}
    </div>
  );
}

export default App;
