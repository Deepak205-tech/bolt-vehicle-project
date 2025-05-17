import React from 'react';
import { ChevronRight, X } from 'lucide-react';
import { Vehicle } from '../types';

interface CompareBannerProps {
  selectedCount: number;
  vehicles: Vehicle[];
  onStartComparison: () => void;
  onClearAll: () => void;
  onRemoveVehicle: (id: string) => void;
}

const CompareBanner: React.FC<CompareBannerProps> = ({
  selectedCount,
  vehicles,
  onStartComparison,
  onClearAll,
  onRemoveVehicle,
}) => {
  if (selectedCount === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40 transition-all duration-300 transform translate-y-0">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <div className="text-gray-800 font-medium">
              {selectedCount} {selectedCount === 1 ? 'vehicle' : 'vehicles'} selected
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto max-w-[300px] md:max-w-[500px]">
              {vehicles.map(vehicle => (
                <div 
                  key={vehicle.id} 
                  className="flex items-center bg-gray-100 rounded-full pl-2 pr-1 py-1 text-sm whitespace-nowrap"
                >
                  <span className="mr-1">{vehicle.brand} {vehicle.name}</span>
                  <button
                    onClick={() => onRemoveVehicle(vehicle.id)}
                    className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-gray-200"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={onClearAll}
              className="text-gray-600 hover:text-gray-800 text-sm"
            >
              Clear all
            </button>
            
            <button
              onClick={onStartComparison}
              disabled={selectedCount < 2}
              className={`
                flex items-center gap-1 px-4 py-2 rounded-lg text-white font-medium
                ${selectedCount >= 2
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-400 cursor-not-allowed'
                }
                transition-colors
              `}
            >
              Compare Now
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareBanner;