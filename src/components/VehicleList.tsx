import React, { useState, useMemo } from 'react';
import VehicleCard from './VehicleCard';
import { Vehicle } from '../types';
import FilterBar from './FilterBar';
import NoResults from './NoResults';

interface VehicleListProps {
  vehicles: Vehicle[];
  selectedVehicles: string[];
  onSelectVehicle: (id: string) => void;
}

const VehicleList: React.FC<VehicleListProps> = ({ 
  vehicles, 
  selectedVehicles, 
  onSelectVehicle 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: '',
    brand: '',
    priceRange: { min: 0, max: 20000 },
    engineCapacity: { min: 0, max: 1300 }
  });

  const filteredVehicles = useMemo(() => {
    return vehicles.filter(vehicle => {
      // Search term filter
      const searchMatch = 
        vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.type.toLowerCase().includes(searchTerm.toLowerCase());

      // Type filter
      const typeMatch = !filters.type || vehicle.type === filters.type;
      
      // Brand filter
      const brandMatch = !filters.brand || vehicle.brand === filters.brand;
      
      // Price range filter
      const priceMatch = 
        vehicle.price >= filters.priceRange.min &&
        vehicle.price <= filters.priceRange.max;
        
      // Engine capacity filter
      const engineMatch = 
        vehicle.engineCapacity >= filters.engineCapacity.min &&
        vehicle.engineCapacity <= filters.engineCapacity.max;
        
      return searchMatch && typeMatch && brandMatch && priceMatch && engineMatch;
    });
  }, [vehicles, searchTerm, filters]);

  const brands = useMemo(() => {
    return [...new Set(vehicles.map(v => v.brand))];
  }, [vehicles]);
  
  const types = useMemo(() => {
    return [...new Set(vehicles.map(v => v.type))];
  }, [vehicles]);
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <FilterBar 
        searchTerm={searchTerm}
        filters={filters}
        brands={brands}
        types={types}
        onSearchChange={setSearchTerm}
        onFilterChange={setFilters}
      />
      
      {filteredVehicles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {filteredVehicles.map(vehicle => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              isSelected={selectedVehicles.includes(vehicle.id)}
              onSelect={onSelectVehicle}
            />
          ))}
        </div>
      ) : (
        <NoResults 
          searchTerm={searchTerm}
          onClearFilters={() => {
            setSearchTerm('');
            setFilters({
              type: '',
              brand: '',
              priceRange: { min: 0, max: 20000 },
              engineCapacity: { min: 0, max: 1300 }
            });
          }}
        />
      )}
    </div>
  );
};

export default VehicleList;