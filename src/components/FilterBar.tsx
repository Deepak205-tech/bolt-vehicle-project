import React from 'react';
import { Search, Filter, X, IndianRupee } from 'lucide-react';

interface FilterBarProps {
  searchTerm: string;
  filters: {
    type: string;
    brand: string;
    priceRange: { min: number; max: number };
    engineCapacity: { min: number; max: number };
    usage: string;
  };
  brands: string[];
  types: string[];
  onSearchChange: (term: string) => void;
  onFilterChange: (filters: any) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  searchTerm,
  filters,
  brands,
  types,
  onSearchChange,
  onFilterChange,
}) => {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  const usageOptions = [
    { value: '', label: 'All Usage Types' },
    { value: 'college', label: 'College' },
    { value: 'office', label: 'Office Commute' },
    { value: 'leisure', label: 'Leisure Rides' },
    { value: 'touring', label: 'Touring' },
    { value: 'daily-commute', label: 'Daily Commute' },
    { value: 'family', label: 'Family Use' }
  ];

  const handleFilterChange = (key: string, value: any) => {
    onFilterChange({
      ...filters,
      [key]: value,
    });
  };

  const clearFilters = () => {
    onFilterChange({
      type: '',
      brand: '',
      usage: '',
      priceRange: { min: 0, max: 200000 },
      engineCapacity: { min: 0, max: 1300 }
    });
    onSearchChange('');
  };

  const hasActiveFilters = () => {
    return (
      filters.type !== '' ||
      filters.brand !== '' ||
      filters.usage !== '' ||
      filters.priceRange.min > 0 ||
      filters.priceRange.max < 200000 ||
      filters.engineCapacity.min > 0 ||
      filters.engineCapacity.max < 1300 ||
      searchTerm !== ''
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-grow w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full p-2 pl-10 pr-4 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
              placeholder="Search vehicles, brands..."
            />
            {searchTerm && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200
              hover:bg-gray-50 transition-colors whitespace-nowrap
              ${isFilterOpen ? 'bg-blue-50 text-blue-600 border-blue-200' : ''}
            `}
          >
            <Filter size={18} />
            <span>Filters</span>
            {hasActiveFilters() && (
              <span className="inline-flex items-center justify-center w-5 h-5 ml-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
                !
              </span>
            )}
          </button>

          {hasActiveFilters() && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors whitespace-nowrap"
            >
              <X size={16} />
              <span>Clear All</span>
            </button>
          )}
        </div>
      </div>

      {isFilterOpen && (
        <div className="p-4 border-t border-gray-100 animate-fadeDown">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              >
                <option value="">All Types</option>
                {types.map((type) => (
                  <option key={type} value={type} className="capitalize">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
              <select
                value={filters.brand}
                onChange={(e) => handleFilterChange('brand', e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              >
                <option value="">All Brands</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Usage</label>
              <select
                value={filters.usage}
                onChange={(e) => handleFilterChange('usage', e.target.value)}
                className="w-full p-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              >
                {usageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Range: ₹{(filters.priceRange.min/1000).toFixed(1)}K - ₹{(filters.priceRange.max/1000).toFixed(1)}K
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="5000"
                  value={filters.priceRange.min}
                  onChange={(e) =>
                    handleFilterChange('priceRange', {
                      ...filters.priceRange,
                      min: parseInt(e.target.value),
                    })
                  }
                  className="w-full"
                />
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="5000"
                  value={filters.priceRange.max}
                  onChange={(e) =>
                    handleFilterChange('priceRange', {
                      ...filters.priceRange,
                      max: parseInt(e.target.value),
                    })
                  }
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;