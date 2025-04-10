'use client';

import { useState } from 'react';

// Define types for our props
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

interface BlogProps {
  posts: BlogPost[];
  categories: string[];
}

export default function Blog({ posts, categories }: BlogProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter posts based on active category
  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <>
      {/* Categories */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full ${activeCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
              } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* Image placeholder - replace with actual image */}
                <div className="w-full h-48 bg-gray-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No posts found in this category.</p>
        </div>
      )}

      {/* Pagination */}
      {/* <div className="mt-12 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-1 rounded-md bg-white text-gray-700 hover:bg-gray-100">
            Previous
          </button>
          <button className="px-3 py-1 rounded-md bg-blue-600 text-white">1</button>
          <button className="px-3 py-1 rounded-md bg-white text-gray-700 hover:bg-gray-100">
            2
          </button>
          <button className="px-3 py-1 rounded-md bg-white text-gray-700 hover:bg-gray-100">
            3
          </button>
          <button className="px-3 py-1 rounded-md bg-white text-gray-700 hover:bg-gray-100">
            Next
          </button>
        </nav>
      </div> */}
    </>
  );
} 