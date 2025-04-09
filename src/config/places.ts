type Place = {
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

type PlacesData = {
  restaurants: Place[];
  cafes: Place[];
  bars: Place[];
  clubs: Place[];
  museums: Place[];
  parks: Place[];
  shopping: Place[];
  entertainment: Place[];
  sports: Place[];
  beaches: Place[];
  'art-galleries': Place[];
  'historical-sites': Place[];
  hotels: Place[];
  karaoke: Place[];
  spa: Place[];
  theater: Place[];
  cinema: Place[];
  bowling: Place[];
  'laser-tag': Place[];
  paintball: Place[];
  arcade: Place[];
  darts: Place[];
  nightlife: Place[];
  gaming: Place[];
};

export const places: PlacesData = {
  restaurants: [
    {
      id: 1,
      name: "Fireworks",
      description: "Contemporary fine dining with a view",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60",
      rating: 4.9,
      reviewCount: 423,
      location: "Yasamal",
      address: "265 Fireworks Street, Baku",
      priceRange: "₼₼₼₼₼",
      type: "restaurant",
      featured: true,
      openingHours: {
        monday: "12:00 PM - 11:00 PM",
        tuesday: "12:00 PM - 11:00 PM",
        wednesday: "12:00 PM - 11:00 PM",
        thursday: "12:00 PM - 11:00 PM",
        friday: "12:00 PM - 12:00 AM",
        saturday: "12:00 PM - 12:00 AM",
        sunday: "12:00 PM - 11:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 03",
        website: "https://fireworks.az",
        email: "info@fireworks.az"
      },
      amenities: ["Fine Dining", "Wine Cellar", "Private Dining"],
      reviews: [
        {
          id: 1,
          user: "Ethan X.",
          rating: 5,
          comment: "Exceptional dining experience! The food and service were outstanding.",
          date: "2023-05-20"
        },
        {
          id: 2,
          user: "Sophia Y.",
          rating: 4,
          comment: "Beautiful restaurant with delicious food. Great wine selection!",
          date: "2023-05-16"
        }
      ]
    },
    {
      id: 2,
      name: "Sumakh",
      description: "Traditional Azerbaijani cuisine",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60",
      rating: 4.8,
      reviewCount: 387,
      location: "Yasamal",
      address: "266 Sumakh Street, Baku",
      priceRange: "₼₼₼₼",
      type: "restaurant",
      featured: true,
      openingHours: {
        monday: "11:00 AM - 11:00 PM",
        tuesday: "11:00 AM - 11:00 PM",
        wednesday: "11:00 AM - 11:00 PM",
        thursday: "11:00 AM - 11:00 PM",
        friday: "11:00 AM - 12:00 AM",
        saturday: "11:00 AM - 12:00 AM",
        sunday: "11:00 AM - 11:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 04",
        website: "https://sumakh.az",
        email: "info@sumakh.az"
      },
      amenities: ["Traditional Cuisine", "Family Style", "Garden Seating"],
      reviews: [
        {
          id: 1,
          user: "Mason Z.",
          rating: 5,
          comment: "Best traditional food in Baku! The plov is amazing.",
          date: "2023-05-21"
        },
        {
          id: 2,
          user: "Isabella A.",
          rating: 4,
          comment: "Great atmosphere and authentic dishes. Loved the dolma!",
          date: "2023-05-17"
        }
      ]
    }
  ],
  cafes: [
    {
      id: 1,
      name: "Coffee House",
      description: "Cozy cafe with specialty coffee and pastries",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.7,
      reviewCount: 156,
      location: "Yasamal",
      address: "123 Coffee Street, Baku",
      priceRange: "₼₼",
      type: "cafe",
      featured: true,
      openingHours: {
        monday: "8:00 AM - 10:00 PM",
        tuesday: "8:00 AM - 10:00 PM",
        wednesday: "8:00 AM - 10:00 PM",
        thursday: "8:00 AM - 10:00 PM",
        friday: "8:00 AM - 11:00 PM",
        saturday: "9:00 AM - 11:00 PM",
        sunday: "9:00 AM - 10:00 PM"
      },
      contact: {
        phone: "+994 12 345 67 89",
        website: "https://coffeehouse.az",
        email: "info@coffeehouse.az"
      },
      amenities: ["Wi-Fi", "Outdoor Seating", "Power Outlets"],
      reviews: [
        {
          id: 1,
          user: "John D.",
          rating: 5,
          comment: "Best coffee in town!",
          date: "2023-05-15"
        },
        {
          id: 2,
          user: "Sarah M.",
          rating: 4,
          comment: "Great atmosphere and pastries.",
          date: "2023-05-10"
        }
      ]
    },
    {
      id: 2,
      name: "Urban Cafe",
      description: "Modern cafe with healthy food options",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.5,
      reviewCount: 134,
      location: "Yasamal",
      address: "456 Urban Street, Baku",
      priceRange: "₼₼",
      type: "cafe",
      featured: true,
      openingHours: {
        monday: "8:00 AM - 10:00 PM",
        tuesday: "8:00 AM - 10:00 PM",
        wednesday: "8:00 AM - 10:00 PM",
        thursday: "8:00 AM - 10:00 PM",
        friday: "8:00 AM - 11:00 PM",
        saturday: "9:00 AM - 11:00 PM",
        sunday: "9:00 AM - 10:00 PM"
      },
      contact: {
        phone: "+994 12 345 67 90",
        website: "https://urbancafe.az",
        email: "info@urbancafe.az"
      },
      amenities: ["Wi-Fi", "Outdoor Seating", "Healthy Options"],
      reviews: [
        {
          id: 1,
          user: "Mike N.",
          rating: 5,
          comment: "Great healthy food options!",
          date: "2023-05-16"
        },
        {
          id: 2,
          user: "Lisa O.",
          rating: 4,
          comment: "Nice atmosphere and good coffee.",
          date: "2023-05-11"
        }
      ]
    }
  ],
  nightlife: [
    {
      id: 1,
      name: "Sky Lounge",
      description: "Rooftop bar with panoramic city views",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&auto=format&fit=crop&q=60",
      rating: 4.8,
      reviewCount: 190,
      location: "Yasamal",
      address: "349 Sky Street, Baku",
      priceRange: "₼₼₼",
      type: "nightlife",
      featured: true,
      openingHours: {
        monday: "6:00 PM - 2:00 AM",
        tuesday: "6:00 PM - 2:00 AM",
        wednesday: "6:00 PM - 2:00 AM",
        thursday: "6:00 PM - 2:00 AM",
        friday: "6:00 PM - 4:00 AM",
        saturday: "6:00 PM - 4:00 AM",
        sunday: "6:00 PM - 2:00 AM"
      },
      contact: {
        phone: "+994 12 345 68 23",
        website: "https://skylounge.az",
        email: "info@skylounge.az"
      },
      amenities: ["Rooftop", "Bar", "Live Music", "Dance Floor"],
      reviews: [
        {
          id: 1,
          user: "Robert Smith",
          rating: 5,
          comment: "Amazing views and great cocktails! Perfect for a night out.",
          date: "2023-05-23"
        },
        {
          id: 2,
          user: "Jennifer Lee",
          rating: 4,
          comment: "Beautiful rooftop setting with good music.",
          date: "2023-05-18"
        }
      ]
    },
    {
      id: 2,
      name: "Night Club",
      description: "Upscale nightclub with international DJs",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&auto=format&fit=crop&q=60",
      rating: 4.7,
      reviewCount: 185,
      location: "Yasamal",
      address: "350 Night Street, Baku",
      priceRange: "₼₼₼",
      type: "nightlife",
      featured: true,
      openingHours: {
        monday: "10:00 PM - 4:00 AM",
        tuesday: "10:00 PM - 4:00 AM",
        wednesday: "10:00 PM - 4:00 AM",
        thursday: "10:00 PM - 4:00 AM",
        friday: "10:00 PM - 6:00 AM",
        saturday: "10:00 PM - 6:00 AM",
        sunday: "10:00 PM - 4:00 AM"
      },
      contact: {
        phone: "+994 12 345 68 24",
        website: "https://nightclub.az",
        email: "info@nightclub.az"
      },
      amenities: ["VIP Area", "Bar", "Dance Floor", "Live DJs"],
      reviews: [
        {
          id: 1,
          user: "Michael Brown",
          rating: 5,
          comment: "Best nightclub in Baku! Great music and atmosphere.",
          date: "2023-05-24"
        },
        {
          id: 2,
          user: "Sarah Wilson",
          rating: 4,
          comment: "Amazing DJs and good drinks selection.",
          date: "2023-05-19"
        }
      ]
    }
  ],
  museums: [
    {
      id: 1,
      name: "National Museum of History",
      description: "Museum showcasing Azerbaijan's rich history and culture",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.8,
      reviewCount: 456,
      location: "Yasamal",
      address: "273 Museum Street, Baku",
      priceRange: "₼₼",
      type: "museum",
      featured: true,
      openingHours: {
        monday: "10:00 AM - 6:00 PM",
        tuesday: "10:00 AM - 6:00 PM",
        wednesday: "10:00 AM - 6:00 PM",
        thursday: "10:00 AM - 6:00 PM",
        friday: "10:00 AM - 6:00 PM",
        saturday: "10:00 AM - 6:00 PM",
        sunday: "10:00 AM - 6:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 11",
        website: "https://nationalmuseum.az",
        email: "info@nationalmuseum.az"
      },
      amenities: ["Exhibition Halls", "Guided Tours", "Gift Shop"],
      reviews: [
        {
          id: 1,
          user: "Mason N.",
          rating: 5,
          comment: "Fascinating exhibits about Azerbaijan's history!",
          date: "2023-05-28"
        },
        {
          id: 2,
          user: "Olivia P.",
          rating: 4,
          comment: "Great collection and knowledgeable guides.",
          date: "2023-05-24"
        }
      ]
    },
    {
      id: 2,
      name: "Modern Art Museum",
      description: "Contemporary art museum with rotating exhibitions",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.7,
      reviewCount: 345,
      location: "Yasamal",
      address: "274 Modern Art Street, Baku",
      priceRange: "₼₼",
      type: "museum",
      featured: true,
      openingHours: {
        monday: "11:00 AM - 7:00 PM",
        tuesday: "11:00 AM - 7:00 PM",
        wednesday: "11:00 AM - 7:00 PM",
        thursday: "11:00 AM - 7:00 PM",
        friday: "11:00 AM - 7:00 PM",
        saturday: "11:00 AM - 7:00 PM",
        sunday: "11:00 AM - 7:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 12",
        website: "https://modernartmuseum.az",
        email: "info@modernartmuseum.az"
      },
      amenities: ["Exhibition Space", "Art Shop", "Cafe"],
      reviews: [
        {
          id: 1,
          user: "Lucas Q.",
          rating: 5,
          comment: "Amazing contemporary art collection!",
          date: "2023-05-29"
        },
        {
          id: 2,
          user: "Mia R.",
          rating: 4,
          comment: "Great space for modern art exhibitions.",
          date: "2023-05-25"
        }
      ]
    }
  ],
  gaming: [
    {
      id: 1,
      name: 'Game Zone',
      description: 'Modern gaming center with high-end PCs, VR stations, and console gaming areas.',
      image: '/placeholder.jpg',
      rating: 4.7,
      reviewCount: 180,
      location: 'Baku City',
      address: '321 Game Street, Baku, Azerbaijan',
      priceRange: '$$',
      type: 'PC Gaming',
      featured: true,
      openingHours: {
        monday: '10:00 AM - 10:00 PM',
        tuesday: '10:00 AM - 10:00 PM',
        wednesday: '10:00 AM - 10:00 PM',
        thursday: '10:00 AM - 10:00 PM',
        friday: '10:00 AM - 12:00 AM',
        saturday: '10:00 AM - 12:00 AM',
        sunday: '10:00 AM - 10:00 PM'
      },
      contact: {
        phone: '+994 12 345 67 95',
        website: 'https://gamezone.az',
        email: 'info@gamezone.az'
      },
      amenities: ['High-end PCs', 'VR Stations', 'Console Gaming', 'Snack Bar', 'Wi-Fi', 'Air Conditioning'],
      reviews: [
        {
          id: 1,
          user: 'Mike Johnson',
          rating: 5,
          comment: 'Best gaming center in Baku! Great equipment and friendly staff.',
          date: '2023-04-25'
        }
      ]
    }
  ],
  parks: [
    {
      id: 1,
      name: "Central Park",
      description: "Large urban park with walking trails and recreational areas",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.7,
      reviewCount: 567,
      location: "Yasamal",
      address: "275 Park Street, Baku",
      priceRange: "₼",
      type: "park",
      featured: true,
      openingHours: {
        monday: "6:00 AM - 10:00 PM",
        tuesday: "6:00 AM - 10:00 PM",
        wednesday: "6:00 AM - 10:00 PM",
        thursday: "6:00 AM - 10:00 PM",
        friday: "6:00 AM - 10:00 PM",
        saturday: "6:00 AM - 10:00 PM",
        sunday: "6:00 AM - 10:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 13",
        website: "https://centralpark.az",
        email: "info@centralpark.az"
      },
      amenities: ["Walking Trails", "Playground", "Picnic Areas"],
      reviews: [
        {
          id: 1,
          user: "William S.",
          rating: 5,
          comment: "Beautiful park with great walking trails!",
          date: "2023-05-30"
        },
        {
          id: 2,
          user: "Emma T.",
          rating: 4,
          comment: "Perfect place for outdoor activities.",
          date: "2023-05-26"
        }
      ]
    },
    {
      id: 2,
      name: "Seaside Park",
      description: "Waterfront park with beach access and recreational facilities",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.8,
      reviewCount: 432,
      location: "Yasamal",
      address: "276 Seaside Street, Baku",
      priceRange: "₼",
      type: "park",
      featured: true,
      openingHours: {
        monday: "6:00 AM - 11:00 PM",
        tuesday: "6:00 AM - 11:00 PM",
        wednesday: "6:00 AM - 11:00 PM",
        thursday: "6:00 AM - 11:00 PM",
        friday: "6:00 AM - 11:00 PM",
        saturday: "6:00 AM - 11:00 PM",
        sunday: "6:00 AM - 11:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 14",
        website: "https://seasidepark.az",
        email: "info@seasidepark.az"
      },
      amenities: ["Beach Access", "Sports Facilities", "Cafe"],
      reviews: [
        {
          id: 1,
          user: "James U.",
          rating: 5,
          comment: "Great place for beach activities!",
          date: "2023-05-31"
        },
        {
          id: 2,
          user: "Sophie V.",
          rating: 4,
          comment: "Beautiful waterfront park with lots to do.",
          date: "2023-05-27"
        }
      ]
    }
  ],
  shopping: [
    {
      id: 1,
      name: "Port Baku Mall",
      description: "Modern shopping mall with international brands",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.8,
      reviewCount: 678,
      location: "Yasamal",
      address: "277 Mall Street, Baku",
      priceRange: "₼₼₼₼",
      type: "shopping",
      featured: true,
      openingHours: {
        monday: "10:00 AM - 10:00 PM",
        tuesday: "10:00 AM - 10:00 PM",
        wednesday: "10:00 AM - 10:00 PM",
        thursday: "10:00 AM - 10:00 PM",
        friday: "10:00 AM - 10:00 PM",
        saturday: "10:00 AM - 10:00 PM",
        sunday: "10:00 AM - 10:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 15",
        website: "https://portbakumall.az",
        email: "info@portbakumall.az"
      },
      amenities: ["International Brands", "Food Court", "Entertainment"],
      reviews: [
        {
          id: 1,
          user: "Benjamin W.",
          rating: 5,
          comment: "Great selection of international brands!",
          date: "2023-06-01"
        },
        {
          id: 2,
          user: "Charlotte X.",
          rating: 4,
          comment: "Modern mall with good shopping options.",
          date: "2023-05-28"
        }
      ]
    },
    {
      id: 2,
      name: "Nizami Street",
      description: "Historic shopping street with local boutiques",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.7,
      reviewCount: 543,
      location: "Yasamal",
      address: "278 Nizami Street, Baku",
      priceRange: "₼₼₼",
      type: "shopping",
      featured: true,
      openingHours: {
        monday: "9:00 AM - 9:00 PM",
        tuesday: "9:00 AM - 9:00 PM",
        wednesday: "9:00 AM - 9:00 PM",
        thursday: "9:00 AM - 9:00 PM",
        friday: "9:00 AM - 9:00 PM",
        saturday: "9:00 AM - 9:00 PM",
        sunday: "9:00 AM - 9:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 16",
        website: "https://nizamistreet.az",
        email: "info@nizamistreet.az"
      },
      amenities: ["Local Boutiques", "Cafes", "Street Performers"],
      reviews: [
        {
          id: 1,
          user: "Daniel Y.",
          rating: 5,
          comment: "Great place for local shopping!",
          date: "2023-06-02"
        },
        {
          id: 2,
          user: "Elizabeth Z.",
          rating: 4,
          comment: "Historic street with unique shops.",
          date: "2023-05-29"
        }
      ]
    }
  ],
  'historical-sites': [
    {
      id: 1,
      name: "Old City",
      description: "Historic walled city with medieval architecture",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.9,
      reviewCount: 789,
      location: "Yasamal",
      address: "271 Old City Street, Baku",
      priceRange: "₼₼",
      type: "historical-site",
      featured: true,
      openingHours: {
        monday: "24/7",
        tuesday: "24/7",
        wednesday: "24/7",
        thursday: "24/7",
        friday: "24/7",
        saturday: "24/7",
        sunday: "24/7"
      },
      contact: {
        phone: "+994 12 345 68 09",
        website: "https://oldcity.az",
        email: "info@oldcity.az"
      },
      amenities: ["Guided Tours", "Information Center", "Restaurants"],
      reviews: [
        {
          id: 1,
          user: "Noah J.",
          rating: 5,
          comment: "Beautiful historic district with amazing architecture!",
          date: "2023-05-26"
        },
        {
          id: 2,
          user: "Isabella K.",
          rating: 4,
          comment: "Great place to explore Baku's history.",
          date: "2023-05-22"
        }
      ]
    },
    {
      id: 2,
      name: "Maiden Tower",
      description: "Ancient tower and UNESCO World Heritage site",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.8,
      reviewCount: 654,
      location: "Yasamal",
      address: "272 Maiden Tower Street, Baku",
      priceRange: "₼₼",
      type: "historical-site",
      featured: true,
      openingHours: {
        monday: "9:00 AM - 6:00 PM",
        tuesday: "9:00 AM - 6:00 PM",
        wednesday: "9:00 AM - 6:00 PM",
        thursday: "9:00 AM - 6:00 PM",
        friday: "9:00 AM - 6:00 PM",
        saturday: "9:00 AM - 6:00 PM",
        sunday: "9:00 AM - 6:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 10",
        website: "https://maidentower.az",
        email: "info@maidentower.az"
      },
      amenities: ["Guided Tours", "Museum", "Observation Deck"],
      reviews: [
        {
          id: 1,
          user: "Ethan L.",
          rating: 5,
          comment: "Iconic landmark with rich history!",
          date: "2023-05-27"
        },
        {
          id: 2,
          user: "Sophia M.",
          rating: 4,
          comment: "Amazing views from the top. Great historical significance.",
          date: "2023-05-23"
        }
      ]
    }
  ],
  beaches: [
    {
      id: 1,
      name: "Bilgah Beach",
      description: "Popular beach resort with clean waters and modern facilities",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.5,
      reviewCount: 280,
      location: "Bilgah",
      address: "Bilgah Beach Road, Baku",
      priceRange: "₼₼",
      type: "beach",
      featured: true,
      openingHours: {
        monday: "8:00 AM - 8:00 PM",
        tuesday: "8:00 AM - 8:00 PM",
        wednesday: "8:00 AM - 8:00 PM",
        thursday: "8:00 AM - 8:00 PM",
        friday: "8:00 AM - 8:00 PM",
        saturday: "8:00 AM - 8:00 PM",
        sunday: "8:00 AM - 8:00 PM"
      },
      contact: {
        phone: "+994 12 345 67 99",
        website: "https://bilgahbeach.az",
        email: "info@bilgahbeach.az"
      },
      amenities: ["Beach Chairs", "Umbrellas", "Restaurant", "Showers", "Water Sports"],
      reviews: [
        {
          id: 1,
          user: "Lisa Anderson",
          rating: 4,
          comment: "Great beach with clean water and good facilities.",
          date: "2023-05-10"
        },
        {
          id: 2,
          user: "John Smith",
          rating: 5,
          comment: "Perfect beach for swimming and relaxation.",
          date: "2023-05-12"
        }
      ]
    },
    {
      id: 2,
      name: "Shikhov Beach",
      description: "Quiet beach with crystal clear waters",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.6,
      reviewCount: 195,
      location: "Shikhov",
      address: "Shikhov Beach Road, Baku",
      priceRange: "₼₼",
      type: "beach",
      featured: true,
      openingHours: {
        monday: "8:00 AM - 8:00 PM",
        tuesday: "8:00 AM - 8:00 PM",
        wednesday: "8:00 AM - 8:00 PM",
        thursday: "8:00 AM - 8:00 PM",
        friday: "8:00 AM - 8:00 PM",
        saturday: "8:00 AM - 8:00 PM",
        sunday: "8:00 AM - 8:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 00",
        website: "https://shikhovbeach.az",
        email: "info@shikhovbeach.az"
      },
      amenities: ["Beach Chairs", "Umbrellas", "Cafe", "Showers"],
      reviews: [
        {
          id: 1,
          user: "Maria Garcia",
          rating: 5,
          comment: "Beautiful quiet beach with clear water.",
          date: "2023-05-14"
        },
        {
          id: 2,
          user: "David Wilson",
          rating: 4,
          comment: "Great place for a peaceful day at the beach.",
          date: "2023-05-16"
        }
      ]
    }
  ],
  'art-galleries': [
    {
      id: 1,
      name: "Modern Art Gallery",
      description: "Contemporary art gallery featuring local and international artists",
      image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988d8?w=800&auto=format&fit=crop&q=60",
      rating: 4.8,
      reviewCount: 234,
      location: "Yasamal",
      address: "269 Modern Art Street, Baku",
      priceRange: "₼₼₼",
      type: "art-gallery",
      featured: true,
      openingHours: {
        monday: "10:00 AM - 6:00 PM",
        tuesday: "10:00 AM - 6:00 PM",
        wednesday: "10:00 AM - 6:00 PM",
        thursday: "10:00 AM - 6:00 PM",
        friday: "10:00 AM - 8:00 PM",
        saturday: "10:00 AM - 8:00 PM",
        sunday: "10:00 AM - 6:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 07",
        website: "https://modernartgallery.az",
        email: "info@modernartgallery.az"
      },
      amenities: ["Exhibition Space", "Art Shop", "Guided Tours"],
      reviews: [
        {
          id: 1,
          user: "Oliver F.",
          rating: 5,
          comment: "Amazing collection of contemporary art!",
          date: "2023-05-24"
        },
        {
          id: 2,
          user: "Ava G.",
          rating: 4,
          comment: "Great exhibitions and knowledgeable staff.",
          date: "2023-05-20"
        }
      ]
    },
    {
      id: 2,
      name: "Traditional Art Center",
      description: "Gallery showcasing traditional Azerbaijani art and crafts",
      image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988d8?w=800&auto=format&fit=crop&q=60",
      rating: 4.7,
      reviewCount: 198,
      location: "Yasamal",
      address: "270 Traditional Art Street, Baku",
      priceRange: "₼₼₼",
      type: "art-gallery",
      featured: true,
      openingHours: {
        monday: "10:00 AM - 6:00 PM",
        tuesday: "10:00 AM - 6:00 PM",
        wednesday: "10:00 AM - 6:00 PM",
        thursday: "10:00 AM - 6:00 PM",
        friday: "10:00 AM - 8:00 PM",
        saturday: "10:00 AM - 8:00 PM",
        sunday: "10:00 AM - 6:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 08",
        website: "https://traditionalart.az",
        email: "info@traditionalart.az"
      },
      amenities: ["Traditional Art", "Workshop Space", "Gift Shop"],
      reviews: [
        {
          id: 1,
          user: "Lucas H.",
          rating: 5,
          comment: "Beautiful traditional art and crafts!",
          date: "2023-05-25"
        },
        {
          id: 2,
          user: "Mia I.",
          rating: 4,
          comment: "Great place to learn about local art traditions.",
          date: "2023-05-21"
        }
      ]
    }
  ],
  sports: [
    {
      id: 1,
      name: "FitLife Gym",
      description: "Modern fitness center with state-of-the-art equipment",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.7,
      reviewCount: 220,
      location: "Yasamal",
      address: "321 Fitness Street, Baku",
      priceRange: "₼₼",
      type: "sports",
      featured: true,
      openingHours: {
        monday: "6:00 AM - 11:00 PM",
        tuesday: "6:00 AM - 11:00 PM",
        wednesday: "6:00 AM - 11:00 PM",
        thursday: "6:00 AM - 11:00 PM",
        friday: "6:00 AM - 11:00 PM",
        saturday: "8:00 AM - 10:00 PM",
        sunday: "8:00 AM - 10:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 01",
        website: "https://fitlife.az",
        email: "info@fitlife.az"
      },
      amenities: ["Modern Equipment", "Personal Trainers", "Group Classes", "Sauna"],
      reviews: [
        {
          id: 1,
          user: "Chris Wilson",
          rating: 5,
          comment: "Great gym with professional trainers!",
          date: "2023-05-20"
        },
        {
          id: 2,
          user: "Sarah Brown",
          rating: 4,
          comment: "Clean facility with good equipment.",
          date: "2023-05-15"
        }
      ]
    },
    {
      id: 2,
      name: "Sports Complex",
      description: "Multi-sport facility with various activities",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.6,
      reviewCount: 189,
      location: "Yasamal",
      address: "322 Sports Street, Baku",
      priceRange: "₼₼₼",
      type: "sports",
      featured: true,
      openingHours: {
        monday: "7:00 AM - 10:00 PM",
        tuesday: "7:00 AM - 10:00 PM",
        wednesday: "7:00 AM - 10:00 PM",
        thursday: "7:00 AM - 10:00 PM",
        friday: "7:00 AM - 10:00 PM",
        saturday: "8:00 AM - 9:00 PM",
        sunday: "8:00 AM - 9:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 02",
        website: "https://sportscomplex.az",
        email: "info@sportscomplex.az"
      },
      amenities: ["Swimming Pool", "Tennis Courts", "Basketball Court", "Soccer Field"],
      reviews: [
        {
          id: 1,
          user: "Michael Davis",
          rating: 5,
          comment: "Great facilities for all sports!",
          date: "2023-05-21"
        },
        {
          id: 2,
          user: "Emily White",
          rating: 4,
          comment: "Good variety of sports activities.",
          date: "2023-05-16"
        }
      ]
    }
  ],
  entertainment: [
    {
      id: 1,
      name: "Baku Entertainment Center",
      description: "Modern entertainment complex with various activities",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.8,
      reviewCount: 456,
      location: "Yasamal",
      address: "279 Entertainment Street, Baku",
      priceRange: "₼₼₼",
      type: "entertainment",
      featured: true,
      openingHours: {
        monday: "10:00 AM - 11:00 PM",
        tuesday: "10:00 AM - 11:00 PM",
        wednesday: "10:00 AM - 11:00 PM",
        thursday: "10:00 AM - 11:00 PM",
        friday: "10:00 AM - 12:00 AM",
        saturday: "10:00 AM - 12:00 AM",
        sunday: "10:00 AM - 11:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 17",
        website: "https://entertainmentcenter.az",
        email: "info@entertainmentcenter.az"
      },
      amenities: ["Bowling", "Arcade Games", "Restaurants"],
      reviews: [
        {
          id: 1,
          user: "Henry A.",
          rating: 5,
          comment: "Great place for family entertainment!",
          date: "2023-06-03"
        },
        {
          id: 2,
          user: "Victoria B.",
          rating: 4,
          comment: "Lots of fun activities for everyone.",
          date: "2023-05-30"
        }
      ]
    },
    {
      id: 2,
      name: "Fun World",
      description: "Family entertainment center with games and attractions",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.7,
      reviewCount: 345,
      location: "Yasamal",
      address: "280 Fun Street, Baku",
      priceRange: "₼₼",
      type: "entertainment",
      featured: true,
      openingHours: {
        monday: "9:00 AM - 10:00 PM",
        tuesday: "9:00 AM - 10:00 PM",
        wednesday: "9:00 AM - 10:00 PM",
        thursday: "9:00 AM - 10:00 PM",
        friday: "9:00 AM - 11:00 PM",
        saturday: "9:00 AM - 11:00 PM",
        sunday: "9:00 AM - 10:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 18",
        website: "https://funworld.az",
        email: "info@funworld.az"
      },
      amenities: ["Arcade Games", "Play Area", "Cafe"],
      reviews: [
        {
          id: 1,
          user: "Jack C.",
          rating: 5,
          comment: "Perfect for kids and families!",
          date: "2023-06-04"
        },
        {
          id: 2,
          user: "Sophia D.",
          rating: 4,
          comment: "Great variety of games and activities.",
          date: "2023-05-31"
        }
      ]
    }
  ],
  bars: [
    {
      id: 1,
      name: "Sky Bar",
      description: "Rooftop bar with city views",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.8,
      reviewCount: 245,
      location: "Yasamal",
      address: "261 Sky Street, Baku",
      priceRange: "₼₼₼",
      type: "bar",
      featured: true,
      openingHours: {
        monday: "5:00 PM - 2:00 AM",
        tuesday: "5:00 PM - 2:00 AM",
        wednesday: "5:00 PM - 2:00 AM",
        thursday: "5:00 PM - 2:00 AM",
        friday: "5:00 PM - 3:00 AM",
        saturday: "5:00 PM - 3:00 AM",
        sunday: "5:00 PM - 2:00 AM"
      },
      contact: {
        phone: "+994 12 345 67 99",
        website: "https://skybar.az",
        email: "info@skybar.az"
      },
      amenities: ["Wi-Fi", "Rooftop", "Live Music"],
      reviews: [
        {
          id: 1,
          user: "Henry P.",
          rating: 5,
          comment: "Amazing views and great cocktails!",
          date: "2023-05-16"
        },
        {
          id: 2,
          user: "Isabella Q.",
          rating: 4,
          comment: "Beautiful sunset views and good service.",
          date: "2023-05-12"
        }
      ]
    },
    {
      id: 2,
      name: "Craft Beer Pub",
      description: "Local craft beer pub",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.7,
      reviewCount: 198,
      location: "Yasamal",
      address: "262 Craft Street, Baku",
      priceRange: "₼₼",
      type: "bar",
      featured: true,
      openingHours: {
        monday: "4:00 PM - 1:00 AM",
        tuesday: "4:00 PM - 1:00 AM",
        wednesday: "4:00 PM - 1:00 AM",
        thursday: "4:00 PM - 1:00 AM",
        friday: "4:00 PM - 2:00 AM",
        saturday: "4:00 PM - 2:00 AM",
        sunday: "4:00 PM - 1:00 AM"
      },
      contact: {
        phone: "+994 12 345 68 00",
        website: "https://craftbeerpub.az",
        email: "info@craftbeerpub.az"
      },
      amenities: ["Wi-Fi", "Live Sports", "Craft Beer"],
      reviews: [
        {
          id: 1,
          user: "Jack R.",
          rating: 5,
          comment: "Best craft beer selection in town!",
          date: "2023-05-17"
        },
        {
          id: 2,
          user: "Kate S.",
          rating: 4,
          comment: "Great atmosphere and friendly staff.",
          date: "2023-05-13"
        }
      ]
    }
  ],
  clubs: [
    {
      id: 1,
      name: "Fiction Club",
      description: "Upscale nightclub with international DJs",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.9,
      reviewCount: 312,
      location: "Yasamal",
      address: "263 Fiction Street, Baku",
      priceRange: "₼₼₼₼",
      type: "club",
      featured: true,
      openingHours: {
        monday: "10:00 PM - 5:00 AM",
        tuesday: "10:00 PM - 5:00 AM",
        wednesday: "10:00 PM - 5:00 AM",
        thursday: "10:00 PM - 5:00 AM",
        friday: "10:00 PM - 6:00 AM",
        saturday: "10:00 PM - 6:00 AM",
        sunday: "10:00 PM - 5:00 AM"
      },
      contact: {
        phone: "+994 12 345 68 01",
        website: "https://fictionclub.az",
        email: "info@fictionclub.az"
      },
      amenities: ["VIP Area", "Live DJ", "Dance Floor"],
      reviews: [
        {
          id: 1,
          user: "Leo T.",
          rating: 5,
          comment: "Best nightclub in Baku! Amazing atmosphere and music.",
          date: "2023-05-18"
        },
        {
          id: 2,
          user: "Maya U.",
          rating: 4,
          comment: "Great music and drinks. Will definitely come back!",
          date: "2023-05-14"
        }
      ]
    },
    {
      id: 2,
      name: "Eleven Club",
      description: "Modern club with multiple dance floors",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60",
      rating: 4.8,
      reviewCount: 287,
      location: "Yasamal",
      address: "264 Eleven Street, Baku",
      priceRange: "₼₼₼",
      type: "club",
      featured: true,
      openingHours: {
        monday: "10:00 PM - 5:00 AM",
        tuesday: "10:00 PM - 5:00 AM",
        wednesday: "10:00 PM - 5:00 AM",
        thursday: "10:00 PM - 5:00 AM",
        friday: "10:00 PM - 6:00 AM",
        saturday: "10:00 PM - 6:00 AM",
        sunday: "10:00 PM - 5:00 AM"
      },
      contact: {
        phone: "+994 12 345 68 02",
        website: "https://elevenclub.az",
        email: "info@elevenclub.az"
      },
      amenities: ["Multiple Dance Floors", "Live DJ", "VIP Area"],
      reviews: [
        {
          id: 1,
          user: "Noah V.",
          rating: 5,
          comment: "Amazing club with great music and atmosphere!",
          date: "2023-05-19"
        },
        {
          id: 2,
          user: "Olivia W.",
          rating: 4,
          comment: "Good music and drinks. Nice crowd!",
          date: "2023-05-15"
        }
      ]
    }
  ],
  hotels: [
    {
      id: 1,
      name: "Grand Hotel Baku",
      description: "Luxury 5-star hotel with sea view",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60",
      rating: 4.9,
      reviewCount: 567,
      location: "Yasamal",
      address: "267 Grand Street, Baku",
      priceRange: "₼₼₼₼₼",
      type: "hotel",
      featured: true,
      openingHours: {
        monday: "24/7",
        tuesday: "24/7",
        wednesday: "24/7",
        thursday: "24/7",
        friday: "24/7",
        saturday: "24/7",
        sunday: "24/7"
      },
      contact: {
        phone: "+994 12 345 68 05",
        website: "https://grandhotelbaku.az",
        email: "info@grandhotelbaku.az"
      },
      amenities: ["Spa", "Pool", "Restaurant", "Gym", "Conference Rooms"],
      reviews: [
        {
          id: 1,
          user: "William B.",
          rating: 5,
          comment: "Exceptional service and luxurious rooms!",
          date: "2023-05-22"
        },
        {
          id: 2,
          user: "Emma C.",
          rating: 4,
          comment: "Beautiful hotel with great amenities. The spa was amazing!",
          date: "2023-05-18"
        }
      ]
    },
    {
      id: 2,
      name: "Boutique Hotel",
      description: "Charming boutique hotel in historic district",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60",
      rating: 4.7,
      reviewCount: 289,
      location: "Yasamal",
      address: "268 Boutique Street, Baku",
      priceRange: "₼₼₼₼",
      type: "hotel",
      featured: true,
      openingHours: {
        monday: "24/7",
        tuesday: "24/7",
        wednesday: "24/7",
        thursday: "24/7",
        friday: "24/7",
        saturday: "24/7",
        sunday: "24/7"
      },
      contact: {
        phone: "+994 12 345 68 06",
        website: "https://boutiquehotel.az",
        email: "info@boutiquehotel.az"
      },
      amenities: ["Restaurant", "Bar", "Garden", "Free Wi-Fi"],
      reviews: [
        {
          id: 1,
          user: "James D.",
          rating: 5,
          comment: "Perfect location and charming atmosphere!",
          date: "2023-05-23"
        },
        {
          id: 2,
          user: "Sophie E.",
          rating: 4,
          comment: "Cozy rooms and friendly staff. Great breakfast!",
          date: "2023-05-19"
        }
      ]
    }
  ],
  karaoke: [
    {
      id: 1,
      name: "Karaoke World",
      description: "Premium karaoke experience with private rooms",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60",
      rating: 4.6,
      reviewCount: 175,
      location: "Yasamal",
      address: "347 Karaoke Street, Baku",
      priceRange: "₼₼",
      type: "karaoke",
      featured: true,
      openingHours: {
        monday: "5:00 PM - 2:00 AM",
        tuesday: "5:00 PM - 2:00 AM",
        wednesday: "5:00 PM - 2:00 AM",
        thursday: "5:00 PM - 2:00 AM",
        friday: "5:00 PM - 4:00 AM",
        saturday: "5:00 PM - 4:00 AM",
        sunday: "5:00 PM - 2:00 AM"
      },
      contact: {
        phone: "+994 12 345 68 21",
        website: "https://karaokeworld.az",
        email: "info@karaokeworld.az"
      },
      amenities: ["Private Rooms", "Song Library", "Bar Service", "Sound System"],
      reviews: [
        {
          id: 1,
          user: "David Wilson",
          rating: 5,
          comment: "Best karaoke place in town! Great song selection and private rooms.",
          date: "2023-05-21"
        },
        {
          id: 2,
          user: "Lisa Anderson",
          rating: 4,
          comment: "Fun atmosphere and good sound system.",
          date: "2023-05-16"
        }
      ]
    },
    {
      id: 2,
      name: "Sing & Dance",
      description: "Lively karaoke bar with stage performances",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60",
      rating: 4.5,
      reviewCount: 165,
      location: "Yasamal",
      address: "348 Sing Street, Baku",
      priceRange: "₼₼",
      type: "karaoke",
      featured: true,
      openingHours: {
        monday: "6:00 PM - 2:00 AM",
        tuesday: "6:00 PM - 2:00 AM",
        wednesday: "6:00 PM - 2:00 AM",
        thursday: "6:00 PM - 2:00 AM",
        friday: "6:00 PM - 4:00 AM",
        saturday: "6:00 PM - 4:00 AM",
        sunday: "6:00 PM - 2:00 AM"
      },
      contact: {
        phone: "+994 12 345 68 22",
        website: "https://singanddance.az",
        email: "info@singanddance.az"
      },
      amenities: ["Stage", "Song Library", "Bar Service", "Dance Floor"],
      reviews: [
        {
          id: 1,
          user: "James Taylor",
          rating: 5,
          comment: "Great place for karaoke night! Stage performances are fun.",
          date: "2023-05-22"
        },
        {
          id: 2,
          user: "Maria Garcia",
          rating: 4,
          comment: "Good song selection and lively atmosphere.",
          date: "2023-05-17"
        }
      ]
    }
  ],
  spa: [
    {
      id: 1,
      name: "Luxury Spa",
      description: "Premium spa with traditional and modern treatments",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=60",
      rating: 4.9,
      reviewCount: 195,
      location: "Yasamal",
      address: "351 Spa Street, Baku",
      priceRange: "₼₼₼",
      type: "spa",
      featured: true,
      openingHours: {
        monday: "9:00 AM - 9:00 PM",
        tuesday: "9:00 AM - 9:00 PM",
        wednesday: "9:00 AM - 9:00 PM",
        thursday: "9:00 AM - 9:00 PM",
        friday: "9:00 AM - 10:00 PM",
        saturday: "9:00 AM - 10:00 PM",
        sunday: "9:00 AM - 9:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 25",
        website: "https://luxuryspa.az",
        email: "info@luxuryspa.az"
      },
      amenities: ["Massage", "Facial", "Body Treatment", "Steam Room"],
      reviews: [
        {
          id: 1,
          user: "Emily White",
          rating: 5,
          comment: "Best spa experience ever! The treatments are amazing.",
          date: "2023-05-25"
        },
        {
          id: 2,
          user: "Sophie Martin",
          rating: 5,
          comment: "Luxurious spa with excellent service and facilities.",
          date: "2023-04-26"
        }
      ]
    },
    {
      id: 2,
      name: "Wellness Center",
      description: "Holistic wellness center with various treatments",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=60",
      rating: 4.7,
      reviewCount: 180,
      location: "Yasamal",
      address: "328 Wellness Street, Baku",
      priceRange: "₼₼",
      type: "spa",
      featured: true,
      openingHours: {
        monday: "10:00 AM - 8:00 PM",
        tuesday: "10:00 AM - 8:00 PM",
        wednesday: "10:00 AM - 8:00 PM",
        thursday: "10:00 AM - 8:00 PM",
        friday: "10:00 AM - 9:00 PM",
        saturday: "10:00 AM - 9:00 PM",
        sunday: "10:00 AM - 8:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 02",
        website: "https://wellnesscenter.az",
        email: "info@wellnesscenter.az"
      },
      amenities: ["Yoga", "Meditation", "Massage", "Sauna"],
      reviews: [
        {
          id: 1,
          user: "Anna Brown",
          rating: 5,
          comment: "Great wellness center with professional staff.",
          date: "2023-05-02"
        },
        {
          id: 2,
          user: "Laura Davis",
          rating: 4,
          comment: "Good variety of wellness treatments and classes.",
          date: "2023-04-27"
        }
      ]
    }
  ],
  theater: [
    {
      id: 1,
      name: "State Theater",
      description: "Historic theater with classical performances",
      image: "https://images.unsplash.com/photo-1507924538823-ede4a872b5af?w=800&auto=format&fit=crop&q=60",
      rating: 4.8,
      reviewCount: 185,
      location: "Yasamal",
      address: "353 Theater Street, Baku",
      priceRange: "₼₼",
      type: "theater",
      featured: true,
      openingHours: {
        monday: "10:00 AM - 10:00 PM",
        tuesday: "10:00 AM - 10:00 PM",
        wednesday: "10:00 AM - 10:00 PM",
        thursday: "10:00 AM - 10:00 PM",
        friday: "10:00 AM - 11:00 PM",
        saturday: "10:00 AM - 11:00 PM",
        sunday: "10:00 AM - 10:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 27",
        website: "https://statetheater.az",
        email: "info@statetheater.az"
      },
      amenities: ["Stage", "Orchestra", "Balcony", "Box Office"],
      reviews: [
        {
          id: 1,
          user: "Thomas Anderson",
          rating: 5,
          comment: "Beautiful historic theater with amazing performances.",
          date: "2023-05-27"
        },
        {
          id: 2,
          user: "Patricia Wilson",
          rating: 4,
          comment: "Great classical performances in a stunning venue.",
          date: "2023-05-22"
        }
      ]
    },
    {
      id: 2,
      name: "Modern Theater",
      description: "Contemporary theater with diverse performances",
      image: "https://images.unsplash.com/photo-1507924538823-ede4a872b5af?w=800&auto=format&fit=crop&q=60",
      rating: 4.6,
      reviewCount: 170,
      location: "Yasamal",
      address: "354 Modern Street, Baku",
      priceRange: "₼₼",
      type: "theater",
      featured: true,
      openingHours: {
        monday: "11:00 AM - 9:00 PM",
        tuesday: "11:00 AM - 9:00 PM",
        wednesday: "11:00 AM - 9:00 PM",
        thursday: "11:00 AM - 9:00 PM",
        friday: "11:00 AM - 10:00 PM",
        saturday: "11:00 AM - 10:00 PM",
        sunday: "11:00 AM - 9:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 28",
        website: "https://moderntheater.az",
        email: "info@moderntheater.az"
      },
      amenities: ["Main Stage", "Black Box", "Cafe", "Gift Shop"],
      reviews: [
        {
          id: 1,
          user: "Daniel Brown",
          rating: 5,
          comment: "Modern venue with diverse and interesting performances.",
          date: "2023-05-28"
        },
        {
          id: 2,
          user: "Rachel Green",
          rating: 4,
          comment: "Good variety of shows in a contemporary setting.",
          date: "2023-05-23"
        }
      ]
    }
  ],
  cinema: [
    {
      id: 1,
      name: "Cinema Plus",
      description: "Modern multiplex with latest movies",
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop&q=60",
      rating: 4.7,
      reviewCount: 195,
      location: "Yasamal",
      address: "355 Cinema Street, Baku",
      priceRange: "₼₼",
      type: "cinema",
      featured: true,
      openingHours: {
        monday: "11:00 AM - 11:00 PM",
        tuesday: "11:00 AM - 11:00 PM",
        wednesday: "11:00 AM - 11:00 PM",
        thursday: "11:00 AM - 11:00 PM",
        friday: "11:00 AM - 12:00 AM",
        saturday: "11:00 AM - 12:00 AM",
        sunday: "11:00 AM - 11:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 06",
        website: "https://arthouse.az",
        email: "info@arthouse.az"
      },
      amenities: ["Art House Films", "Cafe", "Discussion Room", "Film Library"],
      reviews: [
        {
          id: 1,
          user: "Alexander Smith",
          rating: 5,
          comment: "Great selection of art house and international films.",
          date: "2023-05-06"
        },
        {
          id: 2,
          user: "Isabella Garcia",
          rating: 4,
          comment: "Nice atmosphere for watching independent films.",
          date: "2023-05-01"
        }
      ]
    }
  ],
  bowling: [
    {
      id: 1,
      name: "Strike Zone",
      description: "Modern bowling alley with arcade games",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&auto=format&fit=crop&q=60",
      rating: 4.6,
      reviewCount: 165,
      location: "Yasamal",
      address: "333 Bowling Street, Baku",
      priceRange: "₼₼",
      type: "bowling",
      featured: true,
      openingHours: {
        monday: "12:00 PM - 12:00 AM",
        tuesday: "12:00 PM - 12:00 AM",
        wednesday: "12:00 PM - 12:00 AM",
        thursday: "12:00 PM - 12:00 AM",
        friday: "12:00 PM - 2:00 AM",
        saturday: "12:00 PM - 2:00 AM",
        sunday: "12:00 PM - 12:00 AM"
      },
      contact: {
        phone: "+994 12 345 68 07",
        website: "https://strikezone.az",
        email: "info@strikezone.az"
      },
      amenities: ["Bowling Lanes", "Arcade Games", "Bar", "Snack Bar"],
      reviews: [
        {
          id: 1,
          user: "William Turner",
          rating: 5,
          comment: "Great bowling alley with modern equipment and games.",
          date: "2023-05-07"
        },
        {
          id: 2,
          user: "Elizabeth Black",
          rating: 4,
          comment: "Fun place for bowling and arcade games.",
          date: "2023-05-02"
        }
      ]
    },
    {
      id: 2,
      name: "Bowling Center",
      description: "Family-friendly bowling center with restaurant",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&auto=format&fit=crop&q=60",
      rating: 4.5,
      reviewCount: 155,
      location: "Yasamal",
      address: "334 Center Street, Baku",
      priceRange: "₼₼",
      type: "bowling",
      featured: true,
      openingHours: {
        monday: "11:00 AM - 11:00 PM",
        tuesday: "11:00 AM - 11:00 PM",
        wednesday: "11:00 AM - 11:00 PM",
        thursday: "11:00 AM - 11:00 PM",
        friday: "11:00 AM - 1:00 AM",
        saturday: "11:00 AM - 1:00 AM",
        sunday: "11:00 AM - 11:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 08",
        website: "https://bowlingcenter.az",
        email: "info@bowlingcenter.az"
      },
      amenities: ["Bowling Lanes", "Restaurant", "Party Room", "Pro Shop"],
      reviews: [
        {
          id: 1,
          user: "Richard White",
          rating: 5,
          comment: "Perfect for family bowling nights!",
          date: "2023-05-08"
        },
        {
          id: 2,
          user: "Margaret Brown",
          rating: 4,
          comment: "Good lanes and friendly staff.",
          date: "2023-05-03"
        }
      ]
    }
  ],
  'laser-tag': [
    {
      id: 1,
      name: "Laser Arena",
      description: "State-of-the-art laser tag arena with multiple game modes",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60",
      rating: 4.7,
      reviewCount: 175,
      location: "Yasamal",
      address: "337 Laser Street, Baku",
      priceRange: "₼₼",
      type: "laser-tag",
      featured: true,
      openingHours: {
        monday: "11:00 AM - 10:00 PM",
        tuesday: "11:00 AM - 10:00 PM",
        wednesday: "11:00 AM - 10:00 PM",
        thursday: "11:00 AM - 10:00 PM",
        friday: "11:00 AM - 12:00 AM",
        saturday: "11:00 AM - 12:00 AM",
        sunday: "11:00 AM - 10:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 11",
        website: "https://laserarena.az",
        email: "info@laserarena.az"
      },
      amenities: ["Multiple Arenas", "Team Events", "Arcade Games", "Snack Bar"],
      reviews: [
        {
          id: 1,
          user: "Michael Brown",
          rating: 5,
          comment: "Amazing laser tag experience! Great for team building.",
          date: "2023-05-11"
        },
        {
          id: 2,
          user: "Jessica White",
          rating: 4,
          comment: "Fun activity with friends. Good equipment.",
          date: "2023-05-06"
        }
      ]
    },
    {
      id: 2,
      name: "Battle Zone",
      description: "Multi-level laser tag facility with themed arenas",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60",
      rating: 4.6,
      reviewCount: 165,
      location: "Yasamal",
      address: "338 Battle Street, Baku",
      priceRange: "₼₼",
      type: "laser-tag",
      featured: true,
      openingHours: {
        monday: "12:00 PM - 9:00 PM",
        tuesday: "12:00 PM - 9:00 PM",
        wednesday: "12:00 PM - 9:00 PM",
        thursday: "12:00 PM - 9:00 PM",
        friday: "12:00 PM - 11:00 PM",
        saturday: "12:00 PM - 11:00 PM",
        sunday: "12:00 PM - 9:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 12",
        website: "https://battlezone.az",
        email: "info@battlezone.az"
      },
      amenities: ["Themed Arenas", "Party Rooms", "Cafe", "Pro Shop"],
      reviews: [
        {
          id: 1,
          user: "Robert Johnson",
          rating: 5,
          comment: "Great laser tag facility with multiple levels!",
          date: "2023-05-12"
        },
        {
          id: 2,
          user: "Amanda Wilson",
          rating: 4,
          comment: "Fun experience with themed arenas.",
          date: "2023-05-07"
        }
      ]
    }
  ],
  paintball: [
    {
      id: 1,
      name: "Combat Zone",
      description: "Professional paintball arena with multiple fields",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60",
      rating: 4.8,
      reviewCount: 185,
      location: "Yasamal",
      address: "339 Combat Street, Baku",
      priceRange: "₼₼",
      type: "paintball",
      featured: true,
      openingHours: {
        monday: "10:00 AM - 8:00 PM",
        tuesday: "10:00 AM - 8:00 PM",
        wednesday: "10:00 AM - 8:00 PM",
        thursday: "10:00 AM - 8:00 PM",
        friday: "10:00 AM - 9:00 PM",
        saturday: "10:00 AM - 9:00 PM",
        sunday: "10:00 AM - 8:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 13",
        website: "https://combatzone.az",
        email: "info@combatzone.az"
      },
      amenities: ["Multiple Fields", "Equipment Rental", "Training Area", "Cafe"],
      reviews: [
        {
          id: 1,
          user: "Thomas Anderson",
          rating: 5,
          comment: "Best paintball experience! Great fields and equipment.",
          date: "2023-05-13"
        },
        {
          id: 2,
          user: "Sarah Wilson",
          rating: 4,
          comment: "Fun activity with friends. Good safety measures.",
          date: "2023-05-08"
        }
      ]
    },
    {
      id: 2,
      name: "Battle Field",
      description: "Indoor and outdoor paintball facilities",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60",
      rating: 4.7,
      reviewCount: 175,
      location: "Yasamal",
      address: "340 Battle Street, Baku",
      priceRange: "₼₼",
      type: "paintball",
      featured: true,
      openingHours: {
        monday: "11:00 AM - 7:00 PM",
        tuesday: "11:00 AM - 7:00 PM",
        wednesday: "11:00 AM - 7:00 PM",
        thursday: "11:00 AM - 7:00 PM",
        friday: "11:00 AM - 8:00 PM",
        saturday: "11:00 AM - 8:00 PM",
        sunday: "11:00 AM - 7:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 14",
        website: "https://battlefield.az",
        email: "info@battlefield.az"
      },
      amenities: ["Indoor Arena", "Outdoor Fields", "Pro Shop", "Changing Rooms"],
      reviews: [
        {
          id: 1,
          user: "David Miller",
          rating: 5,
          comment: "Great paintball facility with both indoor and outdoor fields!",
          date: "2023-05-14"
        },
        {
          id: 2,
          user: "Emily Davis",
          rating: 4,
          comment: "Good equipment and safety measures.",
          date: "2023-05-09"
        }
      ]
    }
  ],
  arcade: [
    {
      id: 1,
      name: "Game World",
      description: "Modern arcade with latest gaming machines",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60",
      rating: 4.6,
      reviewCount: 170,
      location: "Yasamal",
      address: "341 Game Street, Baku",
      priceRange: "₼₼",
      type: "arcade",
      featured: true,
      openingHours: {
        monday: "11:00 AM - 10:00 PM",
        tuesday: "11:00 AM - 10:00 PM",
        wednesday: "11:00 AM - 10:00 PM",
        thursday: "11:00 AM - 10:00 PM",
        friday: "11:00 AM - 12:00 AM",
        saturday: "11:00 AM - 12:00 AM",
        sunday: "11:00 AM - 10:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 15",
        website: "https://gameworld.az",
        email: "info@gameworld.az"
      },
      amenities: ["Latest Games", "VR Stations", "Prize Counter", "Snack Bar"],
      reviews: [
        {
          id: 1,
          user: "William Turner",
          rating: 5,
          comment: "Great arcade with latest games and VR!",
          date: "2023-05-15"
        },
        {
          id: 2,
          user: "Elizabeth Black",
          rating: 4,
          comment: "Fun place with good variety of games.",
          date: "2023-05-10"
        }
      ]
    },
    {
      id: 2,
      name: "Retro Arcade",
      description: "Classic arcade with retro gaming machines",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60",
      rating: 4.7,
      reviewCount: 165,
      location: "Yasamal",
      address: "342 Retro Street, Baku",
      priceRange: "₼₼",
      type: "arcade",
      featured: true,
      openingHours: {
        monday: "12:00 PM - 9:00 PM",
        tuesday: "12:00 PM - 9:00 PM",
        wednesday: "12:00 PM - 9:00 PM",
        thursday: "12:00 PM - 9:00 PM",
        friday: "12:00 PM - 11:00 PM",
        saturday: "12:00 PM - 11:00 PM",
        sunday: "12:00 PM - 9:00 PM"
      },
      contact: {
        phone: "+994 12 345 68 16",
        website: "https://retroarcade.az",
        email: "info@retroarcade.az"
      },
      amenities: ["Classic Games", "Pinball Machines", "Cafe", "Tournaments"],
      reviews: [
        {
          id: 1,
          user: "Richard White",
          rating: 5,
          comment: "Amazing retro gaming experience!",
          date: "2023-05-16"
        },
        {
          id: 2,
          user: "Margaret Brown",
          rating: 4,
          comment: "Great collection of classic arcade games.",
          date: "2023-05-11"
        }
      ]
    }
  ],
  darts: [
    {
      id: 1,
      name: "Darts Club",
      description: "Professional darts venue with multiple boards",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60",
      rating: 4.6,
      reviewCount: 160,
      location: "Yasamal",
      address: "345 Darts Street, Baku",
      priceRange: "₼₼",
      type: "darts",
      featured: true,
      openingHours: {
        monday: "5:00 PM - 12:00 AM",
        tuesday: "5:00 PM - 12:00 AM",
        wednesday: "5:00 PM - 12:00 AM",
        thursday: "5:00 PM - 12:00 AM",
        friday: "5:00 PM - 2:00 AM",
        saturday: "5:00 PM - 2:00 AM",
        sunday: "5:00 PM - 12:00 AM"
      },
      contact: {
        phone: "+994 12 345 68 19",
        website: "https://dartsclub.az",
        email: "info@dartsclub.az"
      },
      amenities: ["Professional Boards", "Bar", "Tournaments", "Training Area"],
      reviews: [
        {
          id: 1,
          user: "Michael Brown",
          rating: 5,
          comment: "Great darts venue with professional equipment!",
          date: "2023-05-19"
        },
        {
          id: 2,
          user: "Jessica White",
          rating: 4,
          comment: "Good atmosphere and friendly competition.",
          date: "2023-05-14"
        }
      ]
    },
    {
      id: 2,
      name: "Darts Zone",
      description: "Casual darts bar with multiple boards",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60",
      rating: 4.5,
      reviewCount: 150,
      location: "Yasamal",
      address: "346 Zone Street, Baku",
      priceRange: "₼₼",
      type: "darts",
      featured: true,
      openingHours: {
        monday: "6:00 PM - 1:00 AM",
        tuesday: "6:00 PM - 1:00 AM",
        wednesday: "6:00 PM - 1:00 AM",
        thursday: "6:00 PM - 1:00 AM",
        friday: "6:00 PM - 3:00 AM",
        saturday: "6:00 PM - 3:00 AM",
        sunday: "6:00 PM - 1:00 AM"
      },
      contact: {
        phone: "+994 12 345 68 20",
        website: "https://dartszone.az",
        email: "info@dartszone.az"
      },
      amenities: ["Multiple Boards", "Bar", "Snack Bar", "Tournaments"],
      reviews: [
        {
          id: 1,
          user: "Robert Johnson",
          rating: 5,
          comment: "Fun place to play darts with friends!",
          date: "2023-05-20"
        },
        {
          id: 2,
          user: "Amanda Wilson",
          rating: 4,
          comment: "Good selection of boards and drinks.",
          date: "2023-05-15"
        }
      ]
    }
  ]
}; 