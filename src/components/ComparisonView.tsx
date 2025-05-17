import React from 'react';
import { X, ArrowLeft } from 'lucide-react';
import { Vehicle } from '../types';

interface ComparisonViewProps {
  vehicles: Vehicle[];
  onClose: () => void;
  onRemoveVehicle: (id: string) => void;
}

const ComparisonView: React.FC<ComparisonViewProps> = ({
  vehicles,
  onClose,
  onRemoveVehicle,
}) => {
  const specs = [
    { label: 'Price', key: 'price', format: (val: number) => `$${val.toLocaleString()}` },
    { label: 'Engine', key: 'engineCapacity', format: (val: number) => val > 0 ? `${val}cc` : 'Electric' },
    { label: 'Power', key: 'horsePower', format: (val: number) => `${val} hp` },
    { label: 'Torque', key: 'torque' },
    { label: 'Mileage', key: 'mileage' },
    { label: 'Top Speed', key: 'topSpeed', format: (val: number) => `${val} km/h` },
    { label: 'Weight', key: 'weight', format: (val: number) => `${val} kg` },
    { label: 'Fuel Capacity', key: 'fuelCapacity', format: (val: number) => val > 0 ? `${val} L` : 'N/A' },
    { label: 'Seat Height', key: 'seatHeight', format: (val: number) => `${val} mm` },
    { label: 'Ground Clearance', key: 'groundClearance', format: (val: number) => `${val} mm` },
    { label: 'Front Brake', key: 'brakes.front' },
    { label: 'Rear Brake', key: 'brakes.rear' },
    { label: 'Front Suspension', key: 'suspension.front' },
    { label: 'Rear Suspension', key: 'suspension.rear' },
    { label: 'Front Wheel', key: 'wheels.front' },
    { label: 'Rear Wheel', key: 'wheels.rear' },
    { label: 'Front Tyre', key: 'tyres.front' },
    { label: 'Rear Tyre', key: 'tyres.rear' },
  ];

  // Helper function to extract nested property values
  const getNestedValue = (obj: any, path: string) => {
    const keys = path.split('.');
    return keys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : ''), obj);
  };

  // Find the best value for each numeric specification
  const getBestValue = (key: string) => {
    // Some specifications are better when higher (e.g., power), some when lower (e.g., weight)
    const higherIsBetter = ['horsePower', 'torque', 'topSpeed', 'fuelCapacity', 'groundClearance'];
    const lowerIsBetter = ['price', 'weight'];
    
    // Only compare numeric values
    const numericKeys = ['price', 'engineCapacity', 'horsePower', 'topSpeed', 'weight', 
                         'fuelCapacity', 'seatHeight', 'groundClearance'];
    
    if (!numericKeys.includes(key)) return null;
    
    const values = vehicles.map(v => getNestedValue(v, key)).filter(v => typeof v === 'number');
    
    if (values.length === 0) return null;
    
    if (higherIsBetter.includes(key)) {
      return Math.max(...values as number[]);
    }
    
    if (lowerIsBetter.includes(key)) {
      return Math.min(...values as number[]);
    }
    
    return null;
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
        <button
          onClick={onClose}
          className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={18} />
          <span>Back to All Vehicles</span>
        </button>
        <h2 className="text-lg font-semibold text-gray-900">Vehicle Comparison</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-4 text-left text-gray-600 font-medium border-r border-gray-100 min-w-[180px]">
                Specifications
              </th>
              {vehicles.map(vehicle => (
                <th key={vehicle.id} className="p-4 min-w-[250px]">
                  <div className="relative">
                    <button
                      onClick={() => onRemoveVehicle(vehicle.id)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-white text-gray-400 hover:text-red-500 rounded-full flex items-center justify-center border border-gray-200"
                    >
                      <X size={14} />
                    </button>
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src={vehicle.image}
                        alt={`${vehicle.brand} ${vehicle.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 text-center">
                      <h3 className="font-semibold text-gray-900">{vehicle.brand} {vehicle.name}</h3>
                      <p className="text-sm text-gray-500 capitalize">{vehicle.type}</p>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {specs.map((spec, index) => {
              const bestValue = getBestValue(spec.key);

              return (
                <tr key={spec.key} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 text-sm font-medium text-gray-700 border-r border-gray-100">
                    {spec.label}
                  </td>
                  {vehicles.map(vehicle => {
                    const value = getNestedValue(vehicle, spec.key);
                    const formattedValue = spec.format ? spec.format(value) : value;
                    const isBest = typeof value === 'number' && bestValue === value;

                    return (
                      <td 
                        key={`${vehicle.id}-${spec.key}`} 
                        className={`p-3 text-sm ${isBest ? 'font-semibold text-blue-600' : 'text-gray-700'}`}
                      >
                        {formattedValue}
                        {isBest && (
                          <span className="ml-1.5 text-xs font-medium bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full">
                            Best
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
            <tr className="bg-white">
              <td className="p-3 text-sm font-medium text-gray-700 border-r border-gray-100">
                Features
              </td>
              {vehicles.map(vehicle => (
                <td key={`${vehicle.id}-features`} className="p-3">
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    {vehicle.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 text-sm font-medium text-gray-700 border-r border-gray-100">
                Colors
              </td>
              {vehicles.map(vehicle => (
                <td key={`${vehicle.id}-colors`} className="p-3 text-sm text-gray-700">
                  {vehicle.colors.join(', ')}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonView;