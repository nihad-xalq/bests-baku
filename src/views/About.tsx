import React from 'react';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            About Baku&apos;s Best
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Your ultimate guide to discovering the best places in Baku, Azerbaijan&apos;s vibrant capital city.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-li:my-1">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Baku&apos;s Best was born from a passion for showcasing the rich culture, history, and modern
            developments of Baku. We understand that finding the best places to visit, eat, and
            experience can be overwhelming, especially in a city as diverse as Baku.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our mission is simple: to help both locals and visitors discover the best that Baku has to
            offer. We carefully curate and review places across various categories, ensuring that you
            get accurate, up-to-date information about the city&apos;s top destinations.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What We Do</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700">
              <strong className="font-semibold">Curated Recommendations:</strong> We handpick the best places in Baku across
              various categories, from restaurants to historical sites.
            </li>
            <li className="text-gray-700">
              <strong className="font-semibold">Detailed Reviews:</strong> Our team provides comprehensive reviews and ratings
              to help you make informed decisions.
            </li>
            <li className="text-gray-700">
              <strong className="font-semibold">Local Insights:</strong> We share insider tips and local knowledge to enhance
              your experience in Baku.
            </li>
            <li className="text-gray-700">
              <strong className="font-semibold">Community Focus:</strong> We value our community&apos;s input and regularly update
              our content based on user feedback.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Team</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our team consists of local experts, food enthusiasts, history buffs, and travel lovers who
            are passionate about sharing their knowledge of Baku. We combine our expertise with
            community feedback to provide the most accurate and helpful recommendations.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Join Our Community</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We believe in the power of community. Whether you&apos;re a local or a visitor, we invite you
            to join our community, share your experiences, and help others discover the best of Baku.
            Follow us on social media and stay updated with the latest recommendations and city news.
          </p>
        </div>
      </div>
    </main>
  );
} 