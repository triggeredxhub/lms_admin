import { useState } from "react";
import { cn } from "../../lib/utils"; // adjust if needed

export default function ToggleCard() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="flex flex-col items-center p-8 space-y-4">
      <div
        className={cn(
          "rounded-lg border p-6 transition-all duration-300",
          isSelected && "border-blue-500 shadow-lg"
        )}
      >
        <h3 className="text-xl font-semibold mb-2">Card Title</h3>
        <p>This card highlights when selected.</p>
      </div>

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setIsSelected(!isSelected)}
      >
        {isSelected ? "Unselect" : "Select"} Card
      </button>
    </div>
  );
}
