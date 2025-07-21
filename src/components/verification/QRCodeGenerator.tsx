/**
 * QR Code Generator Component
 * Generates QR codes for service letter verification
 */

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Download, Copy, Check } from 'lucide-react';

interface QRCodeGeneratorProps {
  verificationCode: string;
  letterNumber: string;
  size?: number;
  className?: string;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
  verificationCode,
  letterNumber,
  size = 200,
  className = ''
}) => {
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Generate verification URL
  const baseUrl = window.location.origin;
  const verificationUrl = `${baseUrl}/#/verify/${verificationCode}`;
  
  // Generate QR code URL using QR Server API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(verificationUrl)}&format=png&margin=10`;
  
  // Copy verification URL to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(verificationUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };
  
  // Download QR code as image
  const downloadQRCode = async () => {
    try {
      const response = await fetch(qrCodeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `QR-Code-${letterNumber}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to download QR code:', err);
    }
  };
  
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <div className="text-center space-y-4">
        {/* Header */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <QrCode className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Verification QR Code</h3>
        </div>
        
        {/* QR Code Image */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-4 rounded-lg border-2 border-gray-200 shadow-sm"
          >
            <img
              src={qrCodeUrl}
              alt={`QR Code for ${letterNumber}`}
              className="block"
              style={{ width: size, height: size }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `data:image/svg+xml;base64,${btoa(`
                  <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#f3f4f6"/>
                    <text x="50%" y="50%" font-family="Arial" font-size="14" fill="#6b7280" text-anchor="middle" dy=".3em">
                      QR Code\nUnavailable
                    </text>
                  </svg>
                `)}`;
              }}
            />
          </motion.div>
        </div>
        
        {/* Letter Information */}
        <div className="text-sm text-gray-600 space-y-1">
          <p><span className="font-medium">Letter:</span> {letterNumber}</p>
          <p><span className="font-medium">Code:</span> {verificationCode}</p>
        </div>
        
        {/* Verification URL */}
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-500 mb-2">Verification URL:</p>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={verificationUrl}
              readOnly
              className="flex-1 text-xs bg-white border border-gray-200 rounded px-2 py-1 text-gray-700"
            />
            <button
              onClick={copyToClipboard}
              className="flex items-center space-x-1 px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              title="Copy URL"
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-center space-x-3 pt-4">
          <button
            onClick={downloadQRCode}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download QR</span>
          </button>
          
          <button
            onClick={() => window.open(verificationUrl, '_blank')}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <QrCode className="w-4 h-4" />
            <span>Test Verify</span>
          </button>
        </div>
        
        {/* Instructions */}
        <div className="text-xs text-gray-500 mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="font-medium text-blue-800 mb-1">How to use:</p>
          <ul className="text-left space-y-1">
            <li>• Print this QR code on the service letter</li>
            <li>• Recipients can scan to verify authenticity</li>
            <li>• Or share the verification URL directly</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;