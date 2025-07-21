/**
 * Service Letter Preview Component
 * Provides preview and print functionality for service letters
 */

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Printer, Download, Eye, X, QrCode } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';
import ServiceLetterTemplate from './ServiceLetterTemplate';
import QRCodeGenerator from './QRCodeGenerator';
import type { Employee, ServiceLetter } from '@/types/verification';

interface ServiceLetterPreviewProps {
  employee: Employee;
  serviceLetter: ServiceLetter;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceLetterPreview: React.FC<ServiceLetterPreviewProps> = ({
  employee,
  serviceLetter,
  isOpen,
  onClose
}) => {
  const [showQRGenerator, setShowQRGenerator] = useState(false);
  const letterRef = useRef<HTMLDivElement>(null);
  
  // Generate QR code URL for the service letter
  const baseUrl = window.location.origin;
  const verificationUrl = `${baseUrl}/#/verify/${serviceLetter.verificationCode}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(verificationUrl)}&format=png&margin=10`;
  
  // Print functionality
  const handlePrint = useReactToPrint({
    contentRef: letterRef,
    documentTitle: `Service-Letter-${serviceLetter.letterNumber}`,
    pageStyle: `
      @page {
        size: A4;
        margin: 0;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
      }
    `
  });
  
  // Download as PDF (using browser's print to PDF)
  const handleDownloadPDF = () => {
    if (typeof window !== 'undefined' && 'print' in window) {
      window.print();
    } else {
      handlePrint();
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-xl shadow-xl max-w-6xl w-full max-h-[95vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Service Letter Preview</h2>
            <p className="text-sm text-gray-600">
              {serviceLetter.letterNumber} - {employee.firstName} {employee.lastName}
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowQRGenerator(!showQRGenerator)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <QrCode className="w-4 h-4" />
              <span>QR Code</span>
            </button>
            
            <button
              onClick={handlePrint}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
            
            <button
              onClick={handleDownloadPDF}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
            
            <button
              onClick={onClose}
              className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full flex">
            {/* Letter Preview */}
            <div className="flex-1 overflow-y-auto bg-gray-100 p-6">
              <div className="max-w-4xl mx-auto">
                <ServiceLetterTemplate
                  ref={letterRef}
                  employee={employee}
                  serviceLetter={serviceLetter}
                  qrCodeUrl={qrCodeUrl}
                  className="shadow-lg"
                />
              </div>
            </div>
            
            {/* QR Code Generator Sidebar */}
            {showQRGenerator && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 400, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="border-l border-gray-200 bg-white overflow-y-auto"
              >
                <div className="p-6">
                  <QRCodeGenerator
                    verificationCode={serviceLetter.verificationCode}
                    letterNumber={serviceLetter.letterNumber}
                    size={150}
                    className="shadow-none border border-gray-200"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <p>Letter created on {new Date(serviceLetter.createdAt).toLocaleDateString()}</p>
              <p>Verification code: <span className="font-mono font-medium">{serviceLetter.verificationCode}</span></p>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => window.open(verificationUrl, '_blank')}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>Test Verification</span>
              </button>
              
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceLetterPreview;