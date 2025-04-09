import React from 'react';

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Cookie Policy
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Understanding how we use cookies to improve your experience.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-li:my-1">
          <p className="text-gray-700 leading-relaxed mb-6">
            Last updated: March 15, 2024
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Are Cookies</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cookies are small text files that are placed on your computer or mobile device when you visit
            our website. They help us make your experience better by remembering your preferences and
            understanding how you use our site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How We Use Cookies</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We use cookies for the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700">To remember your preferences and settings</li>
            <li className="text-gray-700">To understand how you use our website</li>
            <li className="text-gray-700">To improve our website&apos;s performance</li>
            <li className="text-gray-700">To provide personalized content and recommendations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Types of Cookies We Use</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Essential Cookies</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            These cookies are necessary for the website to function properly. They enable basic
            functions like page navigation and access to secure areas of the website.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Analytics Cookies</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            These cookies help us understand how visitors interact with our website by collecting and
            reporting information anonymously.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Preference Cookies</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            These cookies remember your preferences and settings to enhance your experience on our
            website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Managing Cookies</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most web browsers allow you to control cookies through their settings preferences. However,
            if you limit the ability of websites to set cookies, you may worsen your overall user
            experience.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            To learn more about cookies and how to manage them, visit{' '}
            <a href="https://www.aboutcookies.org" className="text-blue-600 hover:text-blue-800">
              www.aboutcookies.org
            </a>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Cookie Table</h2>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cookie Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Purpose
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    session_id
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Maintains user session
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    Session
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    preferences
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Stores user preferences
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    1 year
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    analytics
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Tracks website usage
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    2 years
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Updates to This Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We may update this Cookie Policy from time to time. We will notify you of any changes by
            posting the new Cookie Policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you have any questions about our Cookie Policy, please contact us at:
            <br />
            Email: cookies@bakusbest.com
          </p>
        </div>
      </div>
    </main>
  );
} 