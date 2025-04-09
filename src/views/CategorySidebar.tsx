import { categories } from '@/config/categories';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type CategorySidebarProps = {
  currentCategory: string;
};

export default function CategorySidebar({ currentCategory }: CategorySidebarProps) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      const activeItem = listRef.current.querySelector(`[data-category="${currentCategory}"]`);
      if (activeItem) {
        const containerWidth = listRef.current.offsetWidth;
        const itemLeft = (activeItem as HTMLElement).offsetLeft;
        const itemWidth = (activeItem as HTMLElement).offsetWidth;
        const scrollTo = itemLeft - (containerWidth / 2) + (itemWidth / 2);

        listRef.current.scrollTo({
          left: scrollTo,
          behavior: 'smooth'
        });
      }
    }
  }, [currentCategory]);

  return (
    <aside className="w-full md:w-64 bg-white rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul ref={listRef} className="space-y-2 flex flex-row md:flex-col overflow-x-scroll md:overflow-x-auto">
        {Object.entries(categories).map(([key, category]) => (
          <motion.li
            key={key}
            data-category={key}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href={`/${key}`}
              className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${currentCategory === key
                ? 'bg-blue-50 text-blue-600'
                : 'hover:bg-gray-50 text-gray-600'
                }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span className='w-max md:w-full'>{category.title}</span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </aside>
  );
} 