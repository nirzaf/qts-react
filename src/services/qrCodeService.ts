/**
 * QR Code Generation Service
 * Company: Quadrate Tech Solutions (https://quadrate.lk)
 */

import QRCode from 'qrcode';
import { QRCodeOptions, VerificationQRData } from '../types/employee';

// Default QR code options
const DEFAULT_QR_OPTIONS: QRCode.QRCodeToDataURLOptions = {
  errorCorrectionLevel: 'M',
  type: 'image/png',
  quality: 0.92,
  margin: 1,
  color: {
    dark: '#000000',
    light: '#FFFFFF'
  },
  width: 256
};

// Company branding colors
const QUADRATE_COLORS = {
  primary: '#0607E1',
  secondary: '#0A25C9',
  dark: '#000000',
  light: '#FFFFFF'
};

/**
 * Generate QR code data URL for verification token
 */
export const generateVerificationQR = async (
  token: string,
  options: Partial<QRCodeOptions> = {}
): Promise<string> => {
  try {
    const verificationUrl = `https://quadrate.lk/verify/${token}`;
    
    const qrOptions: QRCode.QRCodeToDataURLOptions = {
      ...DEFAULT_QR_OPTIONS,
      width: options.size || 256,
      errorCorrectionLevel: options.level || 'M',
      margin: options.includeMargin ? 2 : 1,
      color: {
        dark: options.color?.dark || QUADRATE_COLORS.primary,
        light: options.color?.light || QUADRATE_COLORS.light
      }
    };

    const qrCodeDataUrl = await QRCode.toDataURL(verificationUrl, qrOptions);
    return qrCodeDataUrl;
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw new Error('Failed to generate QR code');
  }
};

/**
 * Generate QR code as SVG string
 */
export const generateVerificationQRSVG = async (
  token: string,
  options: Partial<QRCodeOptions> = {}
): Promise<string> => {
  try {
    const verificationUrl = `https://quadrate.lk/verify/${token}`;
    
    const qrOptions: QRCode.QRCodeToStringOptions = {
      type: 'svg',
      errorCorrectionLevel: options.level || 'M',
      margin: options.includeMargin ? 2 : 1,
      color: {
        dark: options.color?.dark || QUADRATE_COLORS.primary,
        light: options.color?.light || QUADRATE_COLORS.light
      },
      width: options.size || 256
    };

    const svgString = await QRCode.toString(verificationUrl, qrOptions);
    return svgString;
  } catch (error) {
    console.error('Error generating QR code SVG:', error);
    throw new Error('Failed to generate QR code SVG');
  }
};

/**
 * Generate QR code as buffer (for server-side image generation)
 */
export const generateVerificationQRBuffer = async (
  token: string,
  options: Partial<QRCodeOptions> = {}
): Promise<Buffer> => {
  try {
    const verificationUrl = `https://quadrate.lk/verify/${token}`;
    
    const qrOptions: QRCode.QRCodeToBufferOptions = {
      type: 'png',
      errorCorrectionLevel: options.level || 'M',
      margin: options.includeMargin ? 2 : 1,
      color: {
        dark: options.color?.dark || QUADRATE_COLORS.primary,
        light: options.color?.light || QUADRATE_COLORS.light
      },
      width: options.size || 256
    };

    const buffer = await QRCode.toBuffer(verificationUrl, qrOptions);
    return buffer;
  } catch (error) {
    console.error('Error generating QR code buffer:', error);
    throw new Error('Failed to generate QR code buffer');
  }
};

/**
 * Generate complete verification QR data with metadata
 */
export const generateVerificationQRData = async (
  token: string,
  employeeName: string,
  options: Partial<QRCodeOptions> = {}
): Promise<VerificationQRData> => {
  try {
    const verificationUrl = `https://quadrate.lk/verify/${token}`;
    const qrCodeDataUrl = await generateVerificationQR(token, options);

    return {
      verification_token: token,
      verification_url: verificationUrl,
      qr_code_data_url: qrCodeDataUrl,
      employee_name: employeeName,
      created_at: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error generating verification QR data:', error);
    throw new Error('Failed to generate verification QR data');
  }
};

/**
 * Validate QR code options
 */
export const validateQROptions = (options: Partial<QRCodeOptions>): boolean => {
  if (options.size && (options.size < 64 || options.size > 1024)) {
    return false;
  }
  
  if (options.level && !['L', 'M', 'Q', 'H'].includes(options.level)) {
    return false;
  }
  
  return true;
};

/**
 * Get recommended QR code options for different use cases
 */
export const getRecommendedQROptions = (useCase: 'print' | 'web' | 'mobile'): Partial<QRCodeOptions> => {
  switch (useCase) {
    case 'print':
      return {
        size: 512,
        level: 'H', // High error correction for print
        includeMargin: true,
        color: {
          dark: QUADRATE_COLORS.dark,
          light: QUADRATE_COLORS.light
        }
      };
    
    case 'web':
      return {
        size: 256,
        level: 'M',
        includeMargin: false,
        color: {
          dark: QUADRATE_COLORS.primary,
          light: QUADRATE_COLORS.light
        }
      };
    
    case 'mobile':
      return {
        size: 200,
        level: 'M',
        includeMargin: true,
        color: {
          dark: QUADRATE_COLORS.primary,
          light: QUADRATE_COLORS.light
        }
      };
    
    default:
      return {
        size: 256,
        level: 'M',
        includeMargin: false,
        color: {
          dark: QUADRATE_COLORS.primary,
          light: QUADRATE_COLORS.light
        }
      };
  }
};

/**
 * Generate branded QR code with company logo (placeholder for future implementation)
 */
export const generateBrandedQR = async (
  token: string,
  options: Partial<QRCodeOptions> = {}
): Promise<string> => {
  // For now, just generate a regular QR code
  // In the future, this could overlay the Quadrate logo in the center
  return generateVerificationQR(token, options);
};

/**
 * Batch generate QR codes for multiple tokens
 */
export const batchGenerateQRCodes = async (
  tokens: Array<{ token: string; employeeName: string }>,
  options: Partial<QRCodeOptions> = {}
): Promise<VerificationQRData[]> => {
  try {
    const results = await Promise.all(
      tokens.map(({ token, employeeName }) =>
        generateVerificationQRData(token, employeeName, options)
      )
    );
    
    return results;
  } catch (error) {
    console.error('Error in batch QR code generation:', error);
    throw new Error('Failed to generate QR codes in batch');
  }
};

/**
 * Get QR code info without generating the actual code
 */
export const getQRCodeInfo = (token: string) => {
  const verificationUrl = `https://quadrate.lk/verify/${token}`;
  
  return {
    verification_url: verificationUrl,
    token_length: token.length,
    estimated_qr_size: {
      small: '200x200px',
      medium: '256x256px',
      large: '512x512px'
    },
    supported_formats: ['PNG', 'SVG', 'Data URL'],
    error_correction_levels: ['L (Low)', 'M (Medium)', 'Q (Quartile)', 'H (High)']
  };
};
