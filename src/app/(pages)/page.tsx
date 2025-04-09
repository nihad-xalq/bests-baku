import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: 'Restaurants',
    description: 'Discover the best local and international cuisine',
    icon: '🍽️',
    href: '/restaurants'
  },
  {
    title: 'Coffee Shops',
    description: 'Find cozy spots for your daily caffeine fix',
    icon: '☕',
    href: '/coffee-shops'
  },
  {
    title: 'Nightlife',
    description: 'Experience Baku&apos;s vibrant club and bar scene',
    icon: '🌙',
    href: '/nightlife'
  },
  {
    title: 'Museums',
    description: 'Explore Baku&apos;s rich cultural heritage',
    icon: '🏛️',
    href: '/museums'
  },
  {
    title: 'Gaming Zones',
    description: 'Modern gaming centers and entertainment spots',
    icon: '🎮',
    href: '/gaming'
  },
  {
    title: 'Parks & Recreation',
    description: 'Beautiful parks and outdoor activities',
    icon: '🌳',
    href: '/parks'
  },
  {
    title: 'Shopping',
    description: 'From traditional bazaars to modern malls',
    icon: '🛍️',
    href: '/shopping'
  },
  {
    title: 'Historical Sites',
    description: 'Ancient landmarks and architectural wonders',
    icon: '🏺',
    href: '/historical-sites'
  },
  {
    title: 'Beaches',
    description: 'Beautiful coastal spots and beach clubs',
    icon: '🏖️',
    href: '/beaches'
  },
  {
    title: 'Art Galleries',
    description: 'Contemporary and traditional art spaces',
    icon: '🎨',
    href: '/art-galleries'
  },
  {
    title: 'Sports & Fitness',
    description: 'Gyms, sports clubs, and outdoor activities',
    icon: '⚽',
    href: '/sports'
  },
  {
    title: 'Entertainment',
    description: 'Theaters, cinemas, and performance venues',
    icon: '🎭',
    href: '/entertainment'
  }
];

const features = [
  {
    title: 'Local Reviews',
    description: 'Read authentic reviews from locals and tourists',
    icon: '⭐'
  },
  {
    title: 'Price Range',
    description: 'Find places that match your budget',
    icon: '💰'
  },
  {
    title: 'Location Based',
    description: 'Discover places near you',
    icon: '📍'
  },
  {
    title: 'Bookmark',
    description: 'Save your favorite places for later',
    icon: '🔖'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/baku-hero.jpg"
          alt="Baku Cityscape"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            Discover Baku
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
            Find the best places to eat, drink, and explore in Azerbaijan&apos;s capital
          </p>
          <div className="w-full max-w-xl">
            <div className="relative">
              <input
                type="search"
                placeholder="Search for places..."
                className="w-full px-6 py-3 rounded-full bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600 transition-colors cursor-pointer">
                Search
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Popular: </span>
              <button className="text-sm bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors">Flame Towers</button>
              <button className="text-sm bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors">Old City</button>
              <button className="text-sm bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors">Nizami Street</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-4">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500">
                {category.title}
              </h3>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Places Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Places</h2>
            <Link href="/featured" className="text-blue-500 hover:text-blue-600">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured places will be added here */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="/placeholder.jpg"
                  alt="Featured Place"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-sm text-gray-600">4.8 (120 reviews)</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-gray-600 mb-4">Stay tuned for featured places!</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">📍 Baku City</span>
                  <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                    Learn more →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}

    </main>
  );
}
