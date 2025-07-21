/**
 * Public Employee Verification Page
 * Company: Quadrate Tech Solutions (https://quadrate.lk)
 */

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  CheckCircle, 
  XCircle, 
  Building, 
  Calendar, 
  User, 
  Briefcase,
  ExternalLink,
  Shield,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import SEO from '@/components/seo/SEO';
import { PublicVerificationDetails } from '@/types/employee';
import { getPublicVerificationDetails } from '@/services/employeeService';

const VerifyEmployee: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [verificationData, setVerificationData] = useState<PublicVerificationDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch verification details
  useEffect(() => {
    const fetchVerificationDetails = async () => {
      if (!token) {
        setError('Invalid verification link');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await getPublicVerificationDetails(token);
        
        if (response.success && response.data) {
          setVerificationData(response.data);
          setError(null);
        } else {
          setError(response.error || 'Verification not found or expired');
        }
      } catch (err) {
        console.error('Error fetching verification details:', err);
        setError('Failed to verify employee information');
      } finally {
        setLoading(false);
      }
    };

    fetchVerificationDetails();
  }, [token]);

  // Format employment dates
  const formatEmploymentDates = (startDate: string, endDate?: string) => {
    const start = new Date(startDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    if (!endDate) {
      return `${start} - Present`;
    }
    
    const end = new Date(endDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    return `${start} - ${end}`;
  };

  // Calculate employment duration
  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    
    if (years > 0) {
      return months > 0 
        ? `${years} year${years > 1 ? 's' : ''}, ${months} month${months > 1 ? 's' : ''}`
        : `${years} year${years > 1 ? 's' : ''}`;
    }
    
    return `${months} month${months > 1 ? 's' : ''}`;
  };

  // Get status badge variant
  const getStatusBadgeVariant = (status: string) => {
    return status === 'Active Employee' ? 'default' : 'secondary';
  };

  // SEO metadata
  const seoTitle = verificationData 
    ? `Employee Verification - ${verificationData.full_name} | Quadrate Tech Solutions`
    : 'Employee Verification | Quadrate Tech Solutions';
    
  const seoDescription = verificationData
    ? `Verified employment information for ${verificationData.full_name} at Quadrate Tech Solutions.`
    : 'Verify employee work experience and employment details at Quadrate Tech Solutions.';

  if (loading) {
    return (
      <>
        <SEO 
          title="Verifying Employee..." 
          description="Loading employee verification details..."
        />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <LoadingSpinner size="large" />
            <p className="mt-4 text-gray-600">Verifying employee information...</p>
          </div>
        </div>
      </>
    );
  }

  if (error || !verificationData) {
    return (
      <>
        <SEO 
          title="Verification Failed | Quadrate Tech Solutions" 
          description="Employee verification could not be completed."
        />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle className="text-red-600">Verification Failed</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600">
                {error || 'The verification link you are trying to access is either invalid, expired, or has been deactivated.'}
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">
                  If you believe this is an error, please contact:
                </p>
                <div className="text-sm">
                  <p><strong>Quadrate Tech Solutions</strong></p>
                  <p>Email: support@quadrate.lk</p>
                  <p>Website: <a href="https://quadrate.lk" className="text-blue-600 hover:underline">quadrate.lk</a></p>
                </div>
              </div>
              <Button onClick={() => navigate('/')} className="w-full">
                Go to Homepage
              </Button>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title={seoTitle}
        description={seoDescription}
        noIndex={true} // Don't index verification pages for privacy
      />
      
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Employee Verification Successful
            </h1>
            <p className="text-gray-600">
              The following employment information has been verified
            </p>
          </div>

          {/* Verification Details Card */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-600" />
                  Verified Employee Information
                </CardTitle>
                <Badge variant={getStatusBadgeVariant(verificationData.employment_status)}>
                  {verificationData.employment_status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Employee Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <User className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Full Name</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {verificationData.full_name}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Briefcase className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Job Title</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {verificationData.job_title}
                      </p>
                    </div>
                  </div>

                  {verificationData.department && (
                    <div className="flex items-start space-x-3">
                      <Building className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">Department</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {verificationData.department}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Employment Period</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {formatEmploymentDates(
                          verificationData.employment_start_date,
                          verificationData.employment_end_date
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Duration</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {calculateDuration(
                          verificationData.employment_start_date,
                          verificationData.employment_end_date
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Company Information */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Building className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-900">{verificationData.company_name}</p>
                    <a 
                      href={verificationData.company_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      {verificationData.company_url}
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Verification Timestamp */}
              <div className="text-center text-sm text-gray-500">
                <p>Verified on {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</p>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                <div className="text-sm text-amber-800">
                  <p className="font-medium mb-1">Security Notice</p>
                  <p>
                    This verification is authentic and has been generated by Quadrate Tech Solutions' 
                    secure employee verification system. All access attempts are logged for security purposes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => window.open('https://quadrate.lk', '_blank')}
            >
              Visit Quadrate Tech Solutions
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmployee;
