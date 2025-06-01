import React from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import type { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{property.name}</h2>
        <p className="text-sm text-gray-600">
          {property.address.city}, {property.address.state}, {property.address.country}
        </p>
        <p className="mt-2 font-bold text-teal-600">${property.price.toLocaleString()}</p>
        <p className="text-yellow-500">⭐ {property.rating.toFixed(2)}</p>
      </div>
    </div>
  );
};

const ListingSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {PROPERTYLISTINGSAMPLE.map((property) => (
        <PropertyCard key={property.name} property={property} />
      ))}
    </section>
  );
};

export default ListingSection;
