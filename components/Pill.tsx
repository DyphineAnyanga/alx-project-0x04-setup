import React from "react";

interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold">
      {title}
    </div>
  );
};

export default Pill;
