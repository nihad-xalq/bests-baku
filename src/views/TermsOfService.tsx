import React from 'react';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-li:my-1">
          <p className="text-gray-700 leading-relaxed mb-6">
            Last updated: March 15, 2024
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Agreement to Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            By accessing or using Baku&apos;s Best, you agree to be bound by these Terms of Service. If you
            disagree with any part of the terms, you may not access our service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Use License</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Permission is granted to temporarily access and use Baku&apos;s Best for personal,
            non-commercial purposes. This is the grant of a license, not a transfer of title, and under
            this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700">Modify or copy the materials</li>
            <li className="text-gray-700">Use the materials for any commercial purpose</li>
            <li className="text-gray-700">Attempt to decompile or reverse engineer any software</li>
            <li className="text-gray-700">Remove any copyright or other proprietary notations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">User Responsibilities</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            As a user of Baku&apos;s Best, you are responsible for:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700">Maintaining the confidentiality of your account</li>
            <li className="text-gray-700">All activities that occur under your account</li>
            <li className="text-gray-700">Providing accurate and complete information</li>
            <li className="text-gray-700">Complying with all applicable laws and regulations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Content Guidelines</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            When using our service, you agree not to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-gray-700">Post false or misleading information</li>
            <li className="text-gray-700">Harass, abuse, or harm others</li>
            <li className="text-gray-700">Post spam or unauthorized advertising</li>
            <li className="text-gray-700">Violate any intellectual property rights</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The service and its original content, features, and functionality are owned by Baku&apos;s Best
            and are protected by international copyright, trademark, patent, trade secret, and other
            intellectual property laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Disclaimer</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The materials on Baku&apos;s Best are provided on an &apos;as is&apos; basis. Baku&apos;s Best makes no
            warranties, expressed or implied, and hereby disclaims and negates all other warranties
            including, without limitation, implied warranties or conditions of merchantability, fitness
            for a particular purpose, or non-infringement of intellectual property or other violation of
            rights.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Limitations</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In no event shall Baku&apos;s Best or its suppliers be liable for any damages (including, without
            limitation, damages for loss of data or profit, or due to business interruption) arising out
            of the use or inability to use the materials on Baku&apos;s Best.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Revisions</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Baku&apos;s Best may revise these terms of service at any time without notice. By using this
            website, you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Governing Law</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            These terms and conditions are governed by and construed in accordance with the laws of
            Azerbaijan and you irrevocably submit to the exclusive jurisdiction of the courts in that
            location.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you have any questions about these Terms of Service, please contact us at:
            <br />
            Email: terms@bakusbest.com
          </p>
        </div>
      </div>
    </main>
  );
} 