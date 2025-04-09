export const categories = {
  restaurants: {
    title: 'Restaurants',
    description: 'Discover the best local and international cuisine',
    icon: '🍽️',
    filters: {
      cuisine: ['Local', 'International', 'Italian', 'Japanese', 'Turkish', 'Azerbaijani'],
      priceRange: ['$', '$$', '$$$', '$$$$'],
      rating: ['5+ Stars', '4+ Stars', '3+ Stars']
    }
  },
  'coffee-shops': {
    title: 'Coffee Shops',
    description: 'Find cozy spots for your daily caffeine fix',
    icon: '☕',
    filters: {
      type: ['Traditional', 'Modern', 'Specialty'],
      priceRange: ['$', '$$', '$$$'],
      rating: ['5+ Stars', '4+ Stars', '3+ Stars']
    }
  },
  nightlife: {
    title: 'Nightlife',
    description: 'Experience Baku\'s vibrant club and bar scene',
    icon: '🌙',
    filters: {
      type: ['Clubs', 'Bars', 'Lounges', 'Live Music'],
      priceRange: ['$', '$$', '$$$', '$$$$'],
      rating: ['5+ Stars', '4+ Stars', '3+ Stars']
    }
  },
  museums: {
    title: 'Museums',
    description: 'Explore Baku\'s rich cultural heritage',
    icon: '🏛️',
    filters: {
      type: ['History', 'Art', 'Science', 'Cultural'],
      priceRange: ['Free', '$', '$$'],
      rating: ['5+ Stars', '4+ Stars', '3+ Stars']
    }
  },
  gaming: {
    title: 'Gaming Zones',
    description: 'Modern gaming centers and entertainment spots',
    icon: '🎮',
    filters: {
      type: ['PC Gaming', 'Console Gaming', 'VR Gaming', 'Arcade'],
      priceRange: ['$', '$$', '$$$'],
      rating: ['5+ Stars', '4+ Stars', '3+ Stars']
    }
  },
  parks: {
    title: 'Parks & Recreation',
    description: 'Beautiful parks and outdoor activities',
    icon: '🌳',
    filters: {
      type: ['Parks', 'Gardens', 'Recreation Centers', 'Sports Facilities'],
      priceRange: ['Free', '$', '$$'],
      rating: ['5+ Stars', '4+ Stars', '3+ Stars']
    }
  },
  shopping: {
    title: 'Shopping',
    description: 'From traditional bazaars to modern malls',
    icon: '🛍️',
    filters: {
      type: ['Malls', 'Markets', 'Boutiques', 'Traditional Bazaars'],
      priceRange: ['$', '$$', '$$$', '$$$$'],
      rating: ['5+ Stars', '4+ Stars', '3+ Stars']
    }
  },
  'historical-sites': {
    title: 'Historical Sites',
    description: 'Ancient landmarks and architectural wonders',
    icon: '🏺',
    filters: {
      type: ['Ancient', 'Medieval', 'Modern History', 'Architecture'],
      priceRange: ['Free', '$', '$$'],
      rating: ['5+ Stars', '4+ Stars', '3+ Stars']
    }
  },
  beaches: {
    title: 'Beaches',
    description: 'Beautiful coastal spots and beach clubs',
    icon: '🏖️',
    filters: {
      type: ['Public Beaches', 'Beach Clubs', 'Resorts'],
      priceRange: ['Free', '$', '$$', '$$$'],
      rating: ['5+ Stars', '4+ Stars', '3+ Stars']
    }
  },
  'art-galleries': {
    title: 'Art Galleries',
    description: 'Contemporary and traditional art spaces',
    icon: '🎨',
    filters: {
      type: ['Contemporary', 'Traditional', 'Modern', 'Photography'],
      priceRange: ['Free', '$', '$$'],
      rating: ['5+ Stars', '4+ Stars', '3+ Stars']
    }
  },
  sports: {
    title: 'Sports & Fitness',
    description: 'Gyms, sports clubs, and outdoor activities',
    icon: '⚽',
    filters: {
      type: ['Gyms', 'Sports Clubs', 'Fitness Centers', 'Outdoor Activities'],
      priceRange: ['$', '$$', '$$$'],
      rating: ['5+ Stars', '4+ Stars', '3+ Stars']
    }
  },
  entertainment: {
    title: 'Entertainment',
    description: 'Theaters, cinemas, and performance venues',
    icon: '🎭',
    filters: {
      type: ['Theaters', 'Cinemas', 'Concert Halls', 'Performance Venues'],
      priceRange: ['$', '$$', '$$$'],
      rating: ['5+ Stars', '4+ Stars', '3+ Stars']
    }
  }
} as const;

export type CategoryKey = keyof typeof categories; 