import { useState } from "react";

type Adventure = {
  activity: string;
  food: string;
  budget: number;
};

function App() {
  const [adventure, setAdventure] = useState<Adventure | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function getAdventure() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://192.168.0.137:8000/adventure");

      const data = await response.json();
      setAdventure(data);
    } catch {
      setError("Could not get an adventure. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div>
      <h1>CoupleQuest</h1>

      <button onClick={getAdventure}>Give us an adventure</button>
      {loading && (
        <div>
          <h2>Loading adventure...</h2>
        </div>
      )}

      {error && (
        <div>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      )}

      {adventure && (
        <div>
          <h2>Your adventure</h2>
          <p>Activity: {adventure.activity}</p>
          <p>Food: {adventure.food}</p>
          <p>Budget: {adventure.budget} SEK</p>
        </div>
      )}
    </div>
  );
}

export default App;
