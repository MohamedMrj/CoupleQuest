import { useState } from "react";

export type AdventureFormData = {
  budget: number;
  availableHours: number;
  mood: string;
};

type AdventureFormProps = {
  onSubmit: (formData: AdventureFormData) => void;
};

function AdventureForm({ onSubmit }: AdventureFormProps) {
  const [budget, setBudget] = useState("");
  const [availableHours, setAvailableHours] = useState("");
  const [mood, setMood] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData: AdventureFormData = {
      budget: Number(budget),
      availableHours: Number(availableHours),
      mood: mood,
    };

    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Budget:
          <input
            type="number"
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
          />
        </label>

        <br />

        <label>
          Available hours:
          <input
            type="number"
            value={availableHours}
            onChange={(event) => setAvailableHours(event.target.value)}
          />
        </label>

        <br />

        <label>
          Mood:
          <select
            value={mood}
            onChange={(event) => setMood(event.target.value)}
          >
            <option value="">Choose mood</option>
            <option value="relaxed">Relaxed</option>
            <option value="adventurous">Adventurous</option>
            <option value="romantic">Romantic</option>
          </select>
        </label>
      </div>

      <button type="submit">Give us an adventure</button>
    </form>
  );
}

export default AdventureForm;
