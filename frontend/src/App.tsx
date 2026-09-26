import { useState } from "react";

type Adventure = {
  activity: string;
  food: string;
  budget: number;
};

function App() {
  const [adventure, setAdventure] = useState<Adventure | null>(null);

  async function getAdventure() {
    const response = await fetch("http://localhost:8000/adventure");
    const data = await response.json();

    setAdventure(data);
  }

  return (
    <div>
      <h1>CoupleQuest</h1>

      <button onClick={getAdventure}>Give us an adventure</button>

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
