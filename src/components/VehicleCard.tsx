import React from 'react';
import { Check, Plus, Star, IndianRupee, Settings, MapPin } from 'lucide-react';
import { Vehicle } from '../types';

interface VehicleCardProps {
  vehicle: Vehicle;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, isSelected, onSelect }) => {
  return (
    <div 
      className={`
        relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 
        overflow-hidden flex flex-col h-full border border-gray-100
        ${isSelected ? 'ring-2 ring-blue-500' : ''}
      `}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={vehicle.image} 
          alt={`${vehicle.brand} ${vehicle.name}`}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-sm font-medium flex items-center gap-1">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          <span>{vehicle.rating.toFixed(1)}</span>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{vehicle.brand} {vehicle.name}</h3>
            <p className="text-sm text-gray-500 capitalize">{vehicle.type}</p>
          </div>
          <div className="flex items-center text-gray-900">
            <IndianRupee size={16} className="mr-1" />
            <span className="font-semibold">{(vehicle.price/1000).toFixed(1)}K</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-2 text-sm">
          <div className="flex flex-col">
            <span className="text-gray-500">Engine</span>
            <span className="font-medium">{vehicle.engineCapacity > 0 ? `${vehicle.engineCapacity}cc` : 'Electric'}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Mileage</span>
            <span className="font-medium">{vehicle.mileage}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Service Centers</span>
            <span className="font-medium flex items-center gap-1">
              <MapPin size={14} />
              {vehicle.serviceNetwork.toLocaleString()}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Maintenance/Year</span>
            <span className="font-medium flex items-center gap-1">
              <Settings size={14} />
              ₹{vehicle.maintenanceCost.yearly.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-wrap gap-1">
            {vehicle.recommendedFor.map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full capitalize"
              >
                {tag.replace('-', ' ')}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button
            onClick={() => onSelect(vehicle.id)}
            className={`
              w-full py-2 px-4 rounded-lg flex items-center justify-center gap-2
              transition-all duration-300 focus:outline-none
              ${isSelected 
                ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' 
                : 'bg-blue-600 text-white hover:bg-blue-700'}
            `}
          >
            {isSelected ? (
              <>
                <Check size={16} /> 
                <span>Selected</span>
              </>
            ) : (
              <>
                <Plus size={16} /> 
                <span>Add to Compare</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;