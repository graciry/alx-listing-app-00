import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-full text-sm border ${
        active ? "bg-teal-600 text-white border-teal-600" : "bg-white text-teal-600 border-teal-600"
      } hover:bg-teal-600 hover:text-white transition`}
    >
      {label}
    </button>
  );
};

export default Pill;
