import React from "react";

const LoaderMini = ({ size = 16, color = "teal" }) => {
  // Determine border colors based on tailwind
  const borderBase = `border-${color}-200`;
  const borderTop = `border-t-${color}-600`;

  return (
    <div
      className="flex items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <div
        className={`animate-spin rounded-full border-2 ${borderBase} ${borderTop}`}
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default LoaderMini;
