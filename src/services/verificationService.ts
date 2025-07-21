/**
 * Employee Verification Service
 * Handles all verification-related API calls and data management
 */

import type {
  Employee,
  ServiceLetter,
  VerificationRecord,
  VerificationRequest,
  VerificationResponse,
  AdminStats,
  CreateServiceLetterRequest,
  UpdateServiceLetterRequest
} from '@/types/verification';

// Mock data for demonstration
const mockEmployees: Employee[] = [
  {
    id: '1',
    employeeId: 'QTS001',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@quadrate.lk',
    department: 'Software Development',
    position: 'Senior Software Engineer',
    joinDate: '2022-01-15',
    status: 'active'
  },
  {
    id: '2',
    employeeId: 'QTS002',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@quadrate.lk',
    department: 'AI Solutions',
    position: 'AI Engineer',
    joinDate: '2021-06-10',
    endDate: '2023-12-31',
    status: 'inactive'
  },
  {
    id: '3',
    employeeId: 'QTS003',
    firstName: 'Mike',
    lastName: 'Johnson',
    email: 'mike.johnson@quadrate.lk',
    department: 'Digital Marketing',
    position: 'Marketing Manager',
    joinDate: '2020-03-20',
    status: 'active'
  }
];

const mockServiceLetters: ServiceLetter[] = [
  {
    id: '1',
    employeeId: '1',
    letterNumber: 'SL-2024-001',
    issueDate: '2024-01-15',
    purpose: 'Employment Verification for Visa Application',
    content: 'This is to certify that Mr. John Doe has been employed with Quadrate Tech Solutions as a Senior Software Engineer from January 15, 2022, to present.',
    issuedBy: 'HR Department',
    verificationCode: 'QTS-VER-001-2024',
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    employeeId: '2',
    letterNumber: 'SL-2024-002',
    issueDate: '2024-01-20',
    purpose: 'Experience Certificate',
    content: 'This is to certify that Ms. Jane Smith worked with Quadrate Tech Solutions as an AI Engineer from June 10, 2021, to December 31, 2023.',
    issuedBy: 'HR Department',
    verificationCode: 'QTS-VER-002-2024',
    isActive: true,
    createdAt: '2024-01-20T14:30:00Z',
    updatedAt: '2024-01-20T14:30:00Z'
  }
];

const mockVerificationRecords: VerificationRecord[] = [
  {
    id: '1',
    serviceLetterNumber: 'SL-2024-001',
    verificationCode: 'QTS-VER-001-2024',
    employee: mockEmployees[0],
    serviceLetter: mockServiceLetters[0],
    verificationCount: 3,
    lastVerifiedAt: '2024-01-25T09:15:00Z'
  }
];

/**
 * Generate QR code URL for verification
 */
const generateQRCodeUrl = (verificationCode: string): string => {
  const baseUrl = window.location.origin;
  const verificationUrl = `${baseUrl}/#/verify/${verificationCode}`;
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(verificationUrl)}`;
};

/**
 * Generate unique verification code
 */
const generateVerificationCode = (): string => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substr(2, 5);
  return `QTS-VER-${timestamp}-${random}`.toUpperCase();
};

/**
 * Verify service letter by verification code or letter number
 */
export const verifyServiceLetter = async (request: VerificationRequest): Promise<VerificationResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const { letterNumber, verificationCode } = request;

  // Find service letter
  const serviceLetter = mockServiceLetters.find(letter => 
    letter.letterNumber === letterNumber || letter.verificationCode === verificationCode
  );

  if (!serviceLetter || !serviceLetter.isActive) {
    return {
      success: false,
      message: 'Invalid verification code or service letter not found.'
    };
  }

  // Find employee
  const employee = mockEmployees.find(emp => emp.id === serviceLetter.employeeId);

  if (!employee) {
    return {
      success: false,
      message: 'Employee record not found.'
    };
  }

  // Update verification record
  let verificationRecord = mockVerificationRecords.find(record => 
    record.verificationCode === serviceLetter.verificationCode
  );

  if (verificationRecord) {
    verificationRecord.verificationCount += 1;
    verificationRecord.lastVerifiedAt = new Date().toISOString();
  } else {
    verificationRecord = {
      id: Date.now().toString(),
      serviceLetterNumber: serviceLetter.letterNumber,
      verificationCode: serviceLetter.verificationCode,
      employee,
      serviceLetter,
      verificationCount: 1,
      lastVerifiedAt: new Date().toISOString()
    };
    mockVerificationRecords.push(verificationRecord);
  }

  return {
    success: true,
    message: 'Service letter verified successfully.',
    data: {
      employee: {
        name: `${employee.firstName} ${employee.lastName}`,
        employeeId: employee.employeeId,
        department: employee.department,
        position: employee.position,
        joinDate: employee.joinDate,
        endDate: employee.endDate,
        status: employee.status
      },
      serviceLetter: {
        letterNumber: serviceLetter.letterNumber,
        issueDate: serviceLetter.issueDate,
        purpose: serviceLetter.purpose,
        issuedBy: serviceLetter.issuedBy
      },
      verificationDetails: {
        verifiedAt: verificationRecord.lastVerifiedAt!,
        verificationCount: verificationRecord.verificationCount,
        isValid: true
      }
    }
  };
};

/**
 * Get all employees (Admin only)
 */
export const getAllEmployees = async (): Promise<Employee[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockEmployees;
};

/**
 * Get all service letters (Admin only)
 */
export const getAllServiceLetters = async (): Promise<ServiceLetter[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockServiceLetters.map(letter => ({
    ...letter,
    qrCodeUrl: generateQRCodeUrl(letter.verificationCode)
  }));
};

/**
 * Get verification statistics (Admin only)
 */
export const getAdminStats = async (): Promise<AdminStats> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const totalVerifications = mockVerificationRecords.reduce(
    (sum, record) => sum + record.verificationCount, 0
  );
  
  const recentVerifications = mockVerificationRecords.filter(
    record => record.lastVerifiedAt && 
    new Date(record.lastVerifiedAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  ).length;

  return {
    totalEmployees: mockEmployees.length,
    activeServiceLetters: mockServiceLetters.filter(letter => letter.isActive).length,
    totalVerifications,
    recentVerifications
  };
};

/**
 * Create new service letter (Admin only)
 */
export const createServiceLetter = async (request: CreateServiceLetterRequest): Promise<ServiceLetter> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const verificationCode = generateVerificationCode();
  const letterNumber = `SL-${new Date().getFullYear()}-${String(mockServiceLetters.length + 1).padStart(3, '0')}`;
  
  const newLetter: ServiceLetter = {
    id: Date.now().toString(),
    employeeId: request.employeeId,
    letterNumber,
    issueDate: new Date().toISOString().split('T')[0],
    purpose: request.purpose,
    content: request.content,
    issuedBy: request.issuedBy,
    verificationCode,
    qrCodeUrl: generateQRCodeUrl(verificationCode),
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  mockServiceLetters.push(newLetter);
  return newLetter;
};

/**
 * Update service letter (Admin only)
 */
export const updateServiceLetter = async (request: UpdateServiceLetterRequest): Promise<ServiceLetter> => {
  await new Promise(resolve => setTimeout(resolve, 600));
  
  const letterIndex = mockServiceLetters.findIndex(letter => letter.id === request.id);
  if (letterIndex === -1) {
    throw new Error('Service letter not found');
  }
  
  const updatedLetter = {
    ...mockServiceLetters[letterIndex],
    ...request,
    updatedAt: new Date().toISOString()
  };
  
  mockServiceLetters[letterIndex] = updatedLetter;
  return updatedLetter;
};

/**
 * Get verification records (Admin only)
 */
export const getVerificationRecords = async (): Promise<VerificationRecord[]> => {
  await new Promise(resolve => setTimeout(resolve, 400));
  return mockVerificationRecords;
};