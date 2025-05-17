import React, { useState } from 'react';
import Header from './components/Header';
import VehicleList from './components/VehicleList';
import CompareBanner from './components/CompareBanner';
import ComparisonView from './components/ComparisonView';
import Footer from './components/Footer';
import { vehicles } from './data/vehicles';
import { ComparisonItem } from './types';

function App() {
  const [selectedVehicles, setSelectedVehicles] = useState<ComparisonItem[]>([]);
  const [isComparing, setIsComparing] = useState(false);

  // Toggle selection of a vehicle
  const handleSelectVehicle = (id: string) => {
    if (selectedVehicles.includes(id)) {
      setSelectedVehicles(selectedVehicles.filter(vehicleId => vehicleId !== id));
    } else {
      if (selectedVehicles.length < 4) { // Limit to 4 vehicles for comparison
        setSelectedVehicles([...selectedVehicles, id]);
      }
    }
  };

  // Remove a vehicle from comparison
  const handleRemoveVehicle = (id: string) => {
    setSelectedVehicles(selectedVehicles.filter(vehicleId => vehicleId !== id));
  };

  // Clear all selected vehicles
  const handleClearAll = () => {
    setSelectedVehicles([]);
    setIsComparing(false);
  };

  // Start comparison
  const handleStartComparison = () => {
    if (selectedVehicles.length >= 2) {
      setIsComparing(true);
      // Scroll to top when comparison view is shown
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Get the selected vehicle objects
  const selectedVehicleObjects = vehicles.filter(vehicle => 
    selectedVehicles.includes(vehicle.id)
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Compare 2-Wheelers Side by Side
            </h1>
            <p className="text-gray-600">
              Select multiple motorcycles, scooters, or bikes to compare specifications, features, 
              and find the perfect ride for your needs.
            </p>
          </div>
          
          {isComparing ? (
            <ComparisonView 
              vehicles={selectedVehicleObjects}
              onClose={() => setIsComparing(false)}
              onRemoveVehicle={handleRemoveVehicle}
            />
          ) : (
            <VehicleList 
              vehicles={vehicles}
              selectedVehicles={selectedVehicles}
              onSelectVehicle={handleSelectVehicle}
            />
          )}
        </div>
      </main>
      
      <CompareBanner 
        selectedCount={selectedVehicles.length}
        vehicles={selectedVehicleObjects}
        onStartComparison={handleStartComparison}
        onClearAll={handleClearAll}
        onRemoveVehicle={handleRemoveVehicle}
      />
      
      <Footer />
    </div>
  );
}

export default App;