import { useState } from "react";

// Custom hook to generate random colors and determine a contrasting text color
export const useGenerateRandomColors = () => {
  // State for background color
  const [color, setColor] = useState<string>("FFFFFF");
  // State for text color
  const [textColor, setTextColor] = useState<string>("000000");

  // Function to generate a random hex color and set a contrasting text color
  const generateRandomColor = () => {
    // Generate a random hex color
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
    setColor(randomColor);

    // Convert hex color to RGB
    const r = parseInt(randomColor.substring(0, 2), 16);
    const g = parseInt(randomColor.substring(2, 4), 16);
    const b = parseInt(randomColor.substring(4, 6), 16);

    // Calculate brightness using the relative luminance formula
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Set text color based on brightness to ensure contrast
    const newTextColor = brightness > 125 ? "000000" : "FFFFFF";
    setTextColor(newTextColor);
  };

  return {
    color,
    textColor,
    generateRandomColor,
  };
};
