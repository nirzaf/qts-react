/**
 * Types for Employee Verification System
 */

export interface Employee {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position: string;
  joinDate: string;
  endDate?: string;
  status: 'active' | 'inactive' | 'terminated';
  profileImage?: string;
}

export interface ServiceLetter {
  id: string;
  employeeId: string;
  letterNumber: string;
  issueDate: string;
  purpose: string;
  content: string;
  issuedBy: string;
  verificationCode: string;
  qrCodeUrl?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface VerificationRecord {
  id: string;
  serviceLetterNumber: string;
  verificationCode: string;
  employee: Employee;
  serviceLetter: ServiceLetter;
  verifiedAt?: string;
  verificationCount: number;
  lastVerifiedAt?: string;
  ipAddress?: string;
  userAgent?: string;
}

export interface VerificationRequest {
  letterNumber?: string;
  verificationCode?: string;
}

export interface VerificationResponse {
  success: boolean;
  message: string;
  data?: {
    employee: {
      name: string;
      employeeId: string;
      department: string;
      position: string;
      joinDate: string;
      endDate?: string;
      status: string;
    };
    serviceLetter: {
      letterNumber: string;
      issueDate: string;
      purpose: string;
      issuedBy: string;
    };
    verificationDetails: {
      verifiedAt: string;
      verificationCount: number;
      isValid: boolean;
    };
  };
}

export interface AdminStats {
  totalEmployees: number;
  activeServiceLetters: number;
  totalVerifications: number;
  recentVerifications: number;
}

export interface CreateServiceLetterRequest {
  employeeId: string;
  purpose: string;
  content: string;
  issuedBy: string;
}

export interface UpdateServiceLetterRequest {
  id: string;
  purpose?: string;
  content?: string;
  isActive?: boolean;
}