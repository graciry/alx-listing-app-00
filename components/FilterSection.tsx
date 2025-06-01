import React, { useState } from "react";
import Pill from "@/components/Pill";

const filterLabels = ["Top Villa", "Self Checkin", "Free Parking", "Pet Friendly"];

const FilterSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap gap-4 justify-center my-6">
      {filterLabels.map((label) => (
        <Pill
          key={label}
          label={label}
          active={activeFilter === label}
          onClick={() => setActiveFilter(label === activeFilter ? null : label)}
        />
      ))}
    </div>
  );
};

export default FilterSection;
