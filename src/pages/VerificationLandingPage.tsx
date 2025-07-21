/**
 * Verification System Landing Page
 * Provides access to verification portal and admin dashboard
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Shield,
  Search,
  Settings,
  QrCode,
  FileText,
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { verifyServiceLetter } from '@/services/verificationService';

const VerificationLandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState('');
  const [letterNumber, setLetterNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleQuickVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!verificationCode && !letterNumber) {
      setError('Please enter either a verification code or letter number');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await verifyServiceLetter({
        verificationCode: verificationCode || undefined,
        letterNumber: letterNumber || undefined
      });

      if (result.success) {
        // Navigate to verification page with the code
        navigate(`/verify/${verificationCode || letterNumber}`);
      } else {
        setError(result.message);
      }
    } catch {
      setError('Failed to verify. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">QTS Verification Portal</h1>
                <p className="text-gray-600">Employee Service Letter Verification System</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/admin/verification')}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Settings className="w-4 h-4" />
              <span>Admin Portal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Verify Employee Service Letters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instantly verify the authenticity of employee service letters issued by Quadrate Tech Solutions. 
              Simply scan the QR code or enter the verification details below.
            </p>
          </motion.div>

          {/* Quick Verification Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Search className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Quick Verification</h3>
              </div>

              <form onSubmit={handleQuickVerification} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Verification Code
                    </label>
                    <input
                      type="text"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      placeholder="e.g., QTS-VER-001-2024"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Letter Number
                    </label>
                    <input
                      type="text"
                      value={letterNumber}
                      onChange={(e) => setLetterNumber(e.target.value)}
                      placeholder="e.g., SL-2024-001"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || (!verificationCode && !letterNumber)}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Verify Service Letter</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Enter either the verification code or letter number to verify the document
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <QrCode className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">QR Code Verification</h3>
            <p className="text-gray-600">
              Scan the QR code on any service letter for instant verification. 
              Quick, secure, and reliable authentication.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Authentic</h3>
            <p className="text-gray-600">
              All service letters are digitally signed and verified through our 
              secure verification system with real-time validation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Results</h3>
            <p className="text-gray-600">
              Get immediate verification results with detailed employee information 
              and service letter authenticity confirmation.
            </p>
          </motion.div>
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">How It Works</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                1
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Scan or Enter Code</h4>
              <p className="text-gray-600">
                Use your phone to scan the QR code on the service letter, or manually enter the verification code.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                2
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Instant Verification</h4>
              <p className="text-gray-600">
                Our system instantly verifies the document against our secure database and validates authenticity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">View Results</h4>
              <p className="text-gray-600">
                Get detailed verification results with employee information and document validity confirmation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Admin Access */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Administrator Access</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            HR administrators can manage employees, create service letters, generate QR codes, 
            and monitor verification activities through our comprehensive admin portal.
          </p>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate('/admin/verification')}
              className="flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <Users className="w-5 h-5" />
              <span>Admin Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">© 2024 Quadrate Tech Solutions. All rights reserved.</p>
            <p className="text-sm">
              For support or inquiries, contact us at 
              <a href="mailto:hr@quadrate.lk" className="text-blue-600 hover:text-blue-800 ml-1">
                hr@quadrate.lk
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationLandingPage;