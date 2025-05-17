import React from 'react';
import { FolderX } from 'lucide-react';

interface NoResultsProps {
  searchTerm: string;
  onClearFilters: () => void;
}

const NoResults: React.FC<NoResultsProps> = ({ searchTerm, onClearFilters }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 mt-8 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-4 bg-gray-100 rounded-full">
        <FolderX size={48} className="text-gray-400" />
      </div>
      <h3 className="mt-6 text-xl font-medium text-gray-900">No results found</h3>
      <p className="mt-2 text-sm text-gray-500 text-center max-w-md">
        {searchTerm 
          ? `We couldn't find any results for "${searchTerm}". Try adjusting your search or filters.`
          : "We couldn't find any matches for your filters. Try adjusting your criteria."
        }
      </p>
      <button
        onClick={onClearFilters}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default NoResults;