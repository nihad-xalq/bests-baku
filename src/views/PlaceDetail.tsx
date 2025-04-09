import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/config/categories';
import { places } from '@/config/places';
import { notFound } from 'next/navigation';

type PlaceDetailProps = {
  params: {
    category: string;
    id: string;
  };
};

export default function PlaceDetail({ params }: PlaceDetailProps) {
  const category = categories[params.category as keyof typeof categories];
  const place = places[params.category as keyof typeof places]?.[parseInt(params.id)];

  if (!category || !place) {
    notFound();
  }

  return (
    <main className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <Link
          href={`/${params.category}`}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <span className="mr-2">←</span> Back to {category.title}
        </Link>

        {/* Place Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">{place.name}</h1>
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">★</span>
              <span className="font-semibold">{place.rating}</span>
              <span className="text-gray-500 ml-1">({place.reviewCount} reviews)</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl mb-1">{place.priceRange}</div>
            <div className="text-gray-600">{place.type}</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Image */}
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
              <Image
                src={place.image}
                alt={place.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              <p className="text-gray-600">{place.description}</p>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
              <div className="space-y-4">
                {place.reviews.map((review) => (
                  <div key={review.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{review.user}</span>
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span>{review.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                    <div className="text-sm text-gray-500 mt-2">{review.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            {/* Location & Hours */}
            <div className="bg-gray-50 p-6 rounded-xl mb-6">
              <h2 className="text-xl font-semibold mb-4">Location & Hours</h2>
              <div className="space-y-4">
                <div>
                  <div className="font-medium mb-1">Address</div>
                  <div className="text-gray-600">{place.address}</div>
                </div>
                <div>
                  <div className="font-medium mb-1">Opening Hours</div>
                  <div className="text-gray-600">
                    {Object.entries(place.openingHours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="capitalize">{day}:</span>
                        <span>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 p-6 rounded-xl mb-6">
              <h2 className="text-xl font-semibold mb-4">Contact</h2>
              <div className="space-y-2">
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-gray-600">{place.contact.phone}</div>
                </div>
                <div>
                  <div className="font-medium">Website</div>
                  <a
                    href={place.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {place.contact.website}
                  </a>
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-600">{place.contact.email}</div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="flex flex-wrap gap-2">
                {place.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="px-3 py-1 bg-white rounded-full text-sm"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 