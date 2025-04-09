'use client';

import { categories } from '@/config/categories';
import CategorySidebar from './CategorySidebar';
import { useState, useEffect } from 'react';
import { places } from '@/config/places';
import { motion } from 'framer-motion';
import PlaceCard from './PlaceCard';

type CategoryPageProps = {
  category: typeof categories[keyof typeof categories];
  places: typeof places[keyof typeof places];
  categoryKey: keyof typeof categories;
};

type Filters = {
  [key: string]: string;
};

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Function to generate a random price between 10 and 100 AZN
const generatePrice = () => {
  const price = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
  return `${price} AZN`;
};

// Function to extract numeric price from price string
const extractPrice = (priceString: string): number => {
  return parseInt(priceString.split(' ')[0]);
};

// Define a type for the place with price
type PlaceWithPrice = {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  location: string;
  address: string;
  priceRange: string;
  type: string;
  featured: boolean;
  openingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  contact: {
    phone: string;
    website: string;
    email: string;
  };
  amenities: string[];
  reviews: {
    id: number;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
};

export default function Category({ category, places: categoryPlaces, categoryKey }: CategoryPageProps) {
  const [filters, setFilters] = useState<Filters>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [placesWithPrices, setPlacesWithPrices] = useState<PlaceWithPrice[]>([]);

  useEffect(() => {
    // Simulate loading state
    setIsLoading(false);

    // Generate prices for all places
    const placesWithGeneratedPrices = Object.values(categoryPlaces || {}).map(place => ({
      ...place,
      priceRange: generatePrice()
    }));

    setPlacesWithPrices(placesWithGeneratedPrices);

    // Set visible after a short delay to ensure content is rendered
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [categoryPlaces]);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({});
  };

  const getFilteredPlaces = () => {
    let placesList = [...placesWithPrices];

    // Apply filters
    Object.entries(filters).forEach(([filterType, value]) => {
      if (value) {
        placesList = placesList.filter(place => {
          if (filterType === 'priceRange') {
            const price = extractPrice(place.priceRange);

            // Price range filter logic
            if (value === '25') return price <= 25;
            if (value === '50') return price > 25 && price <= 50;
            if (value === '75') return price > 50 && price <= 75;
            if (value === '100') return price > 75 && price <= 100;
            return true;
          }
          if (filterType === 'rating') {
            const ratingValue = parseInt(value);
            return place.rating >= ratingValue;
          }
          return place.type.toLowerCase() === value.toLowerCase();
        });
      }
    });

    return placesList;
  };

  const filteredPlaces = getFilteredPlaces();
  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  const formatFilterName = (name: string) => {
    return name
      .replace(/([A-Z])/g, ' $1')
      .replace(/-/g, ' ')
      .replace(/^./, str => str.toUpperCase())
      .trim();
  };

  // Custom price range options
  const priceRangeOptions = ['25', '50', '75', '100'];

  return (
    <main className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <CategorySidebar currentCategory={categoryKey} />

          {/* Main Content */}
          <div className="flex-1">
            {/* Category Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="text-5xl mb-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {category.icon}
              </motion.div>
              <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
              <p className="text-xl text-gray-600">{category.description}</p>
            </motion.div>

            {/* Filters - Now Sticky */}
            {category.filters && (
              <motion.div
                className="mb-8 sticky top-4 z-10 bg-white rounded-xl shadow-sm p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold">Filters</h2>
                  {hasActiveFilters && (
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={clearFilters}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Clear Filters
                    </motion.button>
                  )}
                </div>

                {/* Active Filters */}
                {hasActiveFilters && (
                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {Object.entries(filters).map(([filterType, value], index) => {
                      if (!value) return null;
                      return (
                        <motion.div
                          key={`${filterType}-${value}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * index }}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
                        >
                          <span>
                            {filterType === 'priceRange'
                              ? `Up to ${value} AZN`
                              : value}
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleFilterChange(filterType, '')}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            ×
                          </motion.button>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}

                {/* Filter Controls */}
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {Object.entries(category.filters).map(([filterType, options]) => (
                    <motion.select
                      key={filterType}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      value={filters[filterType] || ''}
                      onChange={(e) => handleFilterChange(filterType, e.target.value)}
                      className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">{formatFilterName(filterType)}</option>
                      {filterType === 'priceRange'
                        ? priceRangeOptions.map(price => (
                          <option key={price} value={price}>
                            Up to {price} AZN
                          </option>
                        ))
                        : options.map((option: string) => (
                          <option key={option} value={option.toLowerCase()}>
                            {option}
                          </option>
                        ))
                      }
                    </motion.select>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Results Count */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-600">
                {filteredPlaces.length} {filteredPlaces.length === 1 ? 'place' : 'places'} found
                {hasActiveFilters && ' matching your filters'}
              </p>
            </motion.div>

            {/* Places Grid */}
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse"
                  >
                    <div className="h-48 bg-gray-200" />
                    <div className="p-6">
                      <div className="h-6 bg-gray-200 rounded mb-2" />
                      <div className="h-4 bg-gray-200 rounded mb-4" />
                      <div className="flex items-center justify-between">
                        <div className="h-4 bg-gray-200 rounded w-24" />
                        <div className="h-4 bg-gray-200 rounded w-16" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredPlaces.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                {filteredPlaces.map((place) => (
                  <PlaceCard
                    key={place.id}
                    place={place}
                    categoryKey={categoryKey}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xl text-gray-600">
                  No places found matching your filters
                </p>
                {hasActiveFilters && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={clearFilters}
                    className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Clear all filters
                  </motion.button>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 