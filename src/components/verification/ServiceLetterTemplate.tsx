/**
 * Service Letter Template Component
 * Generates printable service letters with QR codes
 */

import React, { forwardRef } from 'react';
import { Calendar, User, Building, FileText, Shield } from 'lucide-react';
import type { Employee, ServiceLetter } from '@/types/verification';

interface ServiceLetterTemplateProps {
  employee: Employee;
  serviceLetter: ServiceLetter;
  qrCodeUrl?: string;
  className?: string;
}

const ServiceLetterTemplate = forwardRef<HTMLDivElement, ServiceLetterTemplateProps>((
  { employee, serviceLetter, qrCodeUrl, className = '' },
  ref
) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const joinDate = new Date(employee.joinDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const endDate = employee.endDate ? new Date(employee.endDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : null;

  return (
    <div
      ref={ref}
      className={`bg-white max-w-4xl mx-auto ${className}`}
      style={{
        minHeight: '11in',
        width: '8.5in',
        padding: '1in',
        fontFamily: 'Times New Roman, serif',
        lineHeight: '1.6',
        color: '#000'
      }}
    >
      {/* Header */}
      <div className="text-center mb-8 border-b-2 border-blue-600 pb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-bold text-blue-600 mb-1">QUADRATE TECH SOLUTIONS</h1>
            <p className="text-sm text-gray-600">Technology • Innovation • Excellence</p>
          </div>
        </div>
        
        <div className="text-sm text-gray-600 space-y-1">
          <p>123 Business District, Colombo 03, Sri Lanka</p>
          <p>Tel: +94 11 234 5678 | Email: info@quadrate.lk | Web: www.quadrate.lk</p>
        </div>
      </div>

      {/* Letter Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-sm text-gray-600">Letter No: <span className="font-semibold text-black">{serviceLetter.letterNumber}</span></p>
            <p className="text-sm text-gray-600">Date: <span className="font-semibold text-black">{currentDate}</span></p>
          </div>
          {qrCodeUrl && (
            <div className="text-center">
              <img
                src={qrCodeUrl}
                alt="Verification QR Code"
                className="w-20 h-20 border border-gray-300"
              />
              <p className="text-xs text-gray-500 mt-1">Scan to Verify</p>
            </div>
          )}
        </div>
        
        <h2 className="text-xl font-bold text-center mb-6 uppercase tracking-wide">
          SERVICE LETTER
        </h2>
      </div>

      {/* Letter Content */}
      <div className="mb-8 space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <User className="w-5 h-5 mr-2 text-blue-600" />
            TO WHOM IT MAY CONCERN
          </h3>
        </div>

        <div className="space-y-4 text-justify">
          <p>
            This is to certify that <strong>{employee.firstName} {employee.lastName}</strong> 
            (Employee ID: <strong>{employee.employeeId}</strong>) {employee.status === 'active' ? 'has been' : 'was'} employed 
            with Quadrate Tech Solutions as a <strong>{employee.position}</strong> in the 
            <strong> {employee.department}</strong> department.
          </p>

          <p>
            {employee.status === 'active' ? (
              <>The employment period is from <strong>{joinDate}</strong> to <strong>present</strong>.</>
            ) : (
              <>The employment period was from <strong>{joinDate}</strong> to <strong>{endDate}</strong>.</>
            )}
          </p>

          <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-600">
            <p className="font-medium text-gray-800 mb-2">Purpose: {serviceLetter.purpose}</p>
            <div className="text-sm text-gray-700">
              {serviceLetter.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-2">{paragraph}</p>
              ))}
            </div>
          </div>

          <p>
            During the tenure, {employee.firstName} has demonstrated professionalism, 
            dedication, and technical competence in their role. We wish them success 
            in their future endeavors.
          </p>

          <p>
            This letter is issued upon request for <strong>{serviceLetter.purpose.toLowerCase()}</strong> 
            and is valid as of the date mentioned above.
          </p>
        </div>
      </div>

      {/* Employee Details Table */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-4 flex items-center">
          <FileText className="w-5 h-5 mr-2 text-blue-600" />
          Employee Details
        </h4>
        <table className="w-full border-collapse border border-gray-300">
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 bg-gray-50 font-medium w-1/3">Full Name</td>
              <td className="border border-gray-300 px-4 py-2">{employee.firstName} {employee.lastName}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 bg-gray-50 font-medium">Employee ID</td>
              <td className="border border-gray-300 px-4 py-2">{employee.employeeId}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 bg-gray-50 font-medium">Department</td>
              <td className="border border-gray-300 px-4 py-2">{employee.department}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 bg-gray-50 font-medium">Position</td>
              <td className="border border-gray-300 px-4 py-2">{employee.position}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 bg-gray-50 font-medium">Join Date</td>
              <td className="border border-gray-300 px-4 py-2">{joinDate}</td>
            </tr>
            {endDate && (
              <tr>
                <td className="border border-gray-300 px-4 py-2 bg-gray-50 font-medium">End Date</td>
                <td className="border border-gray-300 px-4 py-2">{endDate}</td>
              </tr>
            )}
            <tr>
              <td className="border border-gray-300 px-4 py-2 bg-gray-50 font-medium">Employment Status</td>
              <td className="border border-gray-300 px-4 py-2 capitalize">{employee.status}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Verification Section */}
      <div className="mb-8 bg-blue-50 p-4 rounded border border-blue-200">
        <h4 className="text-lg font-semibold mb-3 flex items-center text-blue-800">
          <Shield className="w-5 h-5 mr-2" />
          Verification Information
        </h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p><strong>Verification Code:</strong> {serviceLetter.verificationCode}</p>
            <p><strong>Letter Number:</strong> {serviceLetter.letterNumber}</p>
          </div>
          <div>
            <p><strong>Issue Date:</strong> {new Date(serviceLetter.issueDate).toLocaleDateString()}</p>
            <p><strong>Issued By:</strong> {serviceLetter.issuedBy}</p>
          </div>
        </div>
        <div className="mt-3 text-xs text-blue-700">
          <p><strong>Online Verification:</strong> Scan the QR code above or visit our verification portal with the verification code.</p>
          <p><strong>Verification URL:</strong> {window.location.origin}/#/verify/{serviceLetter.verificationCode}</p>
        </div>
      </div>

      {/* Signature Section */}
      <div className="mt-12">
        <div className="flex justify-between items-end">
          <div className="text-center">
            <div className="border-t border-gray-400 w-48 mb-2"></div>
            <p className="text-sm font-medium">HR Manager</p>
            <p className="text-xs text-gray-600">Quadrate Tech Solutions</p>
          </div>
          
          <div className="text-center">
            <div className="border-t border-gray-400 w-48 mb-2"></div>
            <p className="text-sm font-medium">Managing Director</p>
            <p className="text-xs text-gray-600">Quadrate Tech Solutions</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-gray-300 text-center text-xs text-gray-500">
        <p>This is a computer-generated document and does not require a physical signature.</p>
        <p>For verification inquiries, please contact our HR department at hr@quadrate.lk</p>
        <p className="mt-2">© 2024 Quadrate Tech Solutions. All rights reserved.</p>
      </div>
    </div>
  );
});

ServiceLetterTemplate.displayName = 'ServiceLetterTemplate';

export default ServiceLetterTemplate;