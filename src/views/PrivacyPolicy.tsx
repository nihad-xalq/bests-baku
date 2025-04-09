import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-li:my-1">
          <p className="text-gray-700 leading-relaxed mb-6">
            Last updated: March 15, 2024
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Baku&apos;s Best, we take your privacy seriously. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our website and use our
            services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Information We Collect</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700">Name and contact information</li>
            <li className="text-gray-700">Email address</li>
            <li className="text-gray-700">Location data</li>
            <li className="text-gray-700">User preferences and settings</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Usage Information</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700">Browser type and version</li>
            <li className="text-gray-700">Device information</li>
            <li className="text-gray-700">IP address</li>
            <li className="text-gray-700">Pages visited and time spent</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700">To provide and maintain our service</li>
            <li className="text-gray-700">To notify you about changes to our service</li>
            <li className="text-gray-700">To provide customer support</li>
            <li className="text-gray-700">To gather analysis or valuable information</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Security</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We implement appropriate technical and organizational security measures to protect your
            personal information. However, no method of transmission over the Internet is 100% secure,
            and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Your Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700">Access your personal information</li>
            <li className="text-gray-700">Correct inaccurate data</li>
            <li className="text-gray-700">Request deletion of your data</li>
            <li className="text-gray-700">Object to processing of your data</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Cookies</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We use cookies and similar tracking technologies to track activity on our website and hold
            certain information. You can instruct your browser to refuse all cookies or to indicate
            when a cookie is being sent.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We may update our Privacy Policy from time to time. We will notify you of any changes by
            posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: privacy@bakusbest.com
          </p>
        </div>
      </div>
    </main>
  );
} 