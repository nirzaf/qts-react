/**
 * Employee Verification Page
 * Displays verified employee information when accessed via QR code or verification URL
 */

import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  XCircle, 
  User, 
  Building, 
  Calendar, 
  FileText, 
  Shield,
  Clock,
  Eye,
  AlertTriangle
} from 'lucide-react';
import { verifyServiceLetter } from '@/services/verificationService';
import type { VerificationResponse } from '@/types/verification';

const VerificationPage: React.FC = () => {
  const { verificationCode } = useParams<{ verificationCode: string }>();
  const [searchParams] = useSearchParams();
  const letterNumber = searchParams.get('letter');
  
  const [verificationResult, setVerificationResult] = useState<VerificationResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const performVerification = async () => {
      if (!verificationCode && !letterNumber) {
        setError('No verification code or letter number provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const result = await verifyServiceLetter({
          verificationCode,
          letterNumber: letterNumber || undefined
        });
        setVerificationResult(result);
      } catch (err) {
        setError('Failed to verify service letter. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    performVerification();
  }, [verificationCode, letterNumber]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Verifying service letter...</p>
        </motion.div>
      </div>
    );
  }

  if (error || !verificationResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Verification Failed</h1>
          <p className="text-gray-600 mb-6">{error || 'Invalid verification code or service letter not found.'}</p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Return to Home
          </button>
        </motion.div>
      </div>
    );
  }

  if (!verificationResult.success || !verificationResult.data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <AlertTriangle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Verification Failed</h1>
          <p className="text-gray-600 mb-6">{verificationResult.message}</p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Return to Home
          </button>
        </motion.div>
      </div>
    );
  }

  const { employee, serviceLetter, verificationDetails } = verificationResult.data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">QTS Verification Portal</h1>
                <p className="text-gray-600">Quadrate Tech Solutions</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle className="w-6 h-6" />
              <span className="font-semibold">Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Verification Status Banner */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-8 h-8" />
                <div>
                  <h2 className="text-2xl font-bold">Service Letter Verified</h2>
                  <p className="text-green-100">This document has been successfully verified</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-green-100 text-sm">Verified on</p>
                <p className="font-semibold">
                  {new Date(verificationDetails.verifiedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Employee Information */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Employee Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <User className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Employee Information</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Full Name</span>
                    <span className="text-gray-900 font-semibold">{employee.name}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Employee ID</span>
                    <span className="text-gray-900 font-semibold">{employee.employeeId}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Department</span>
                    <span className="text-gray-900 font-semibold">{employee.department}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Position</span>
                    <span className="text-gray-900 font-semibold">{employee.position}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Join Date</span>
                    <span className="text-gray-900 font-semibold">
                      {new Date(employee.joinDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  {employee.endDate && (
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">End Date</span>
                      <span className="text-gray-900 font-semibold">
                        {new Date(employee.endDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600 font-medium">Status</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      employee.status === 'active' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {employee.status.charAt(0).toUpperCase() + employee.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Service Letter Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Service Letter Details</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Letter Number</span>
                    <span className="text-gray-900 font-semibold">{serviceLetter.letterNumber}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Issue Date</span>
                    <span className="text-gray-900 font-semibold">
                      {new Date(serviceLetter.issueDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Purpose</span>
                    <span className="text-gray-900 font-semibold text-right">{serviceLetter.purpose}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600 font-medium">Issued By</span>
                    <span className="text-gray-900 font-semibold">{serviceLetter.issuedBy}</span>
                  </div>
                </div>

                {/* Verification Statistics */}
                <div className="bg-gray-50 rounded-xl p-6 mt-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="w-5 h-5 text-gray-600" />
                    <h4 className="font-semibold text-gray-900">Verification Statistics</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{verificationDetails.verificationCount}</div>
                      <div className="text-sm text-gray-600">Total Verifications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">✓</div>
                      <div className="text-sm text-gray-600">Valid Document</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-6 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="text-sm">
                  Last verified: {new Date(verificationDetails.verifiedAt).toLocaleString()}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                © 2024 Quadrate Tech Solutions. All rights reserved.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VerificationPage;