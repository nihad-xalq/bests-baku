import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type PlaceCardProps = {
  place: {
    id: number;
    name: string;
    description: string;
    image: string;
    rating: number;
    reviewCount: number;
    priceRange: string;
    location: string;
    address: string;
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
  };
  categoryKey: string;
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

export default function PlaceCard({ place, categoryKey }: PlaceCardProps) {
  return (
    <motion.div
      variants={itemAnimation}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Link
        href={`/${categoryKey}/${place.id}`}
        className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
      >
        <motion.div
          className="relative h-48"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Image
            src={place.image}
            alt={place.name}
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
          <p className="text-gray-600 mb-4">{place.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">★</span>
              <span className="font-semibold">{place.rating}</span>
              <span className="text-gray-500 ml-1">({place.reviewCount} reviews)</span>
            </div>
            <span className="text-gray-500">{place.priceRange}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 