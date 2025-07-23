/**
 * Verification Management Component
 * Admin dashboard for managing verification records
 * Company: Quadrate Tech Solutions (https://quadrate.lk)
 */

import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Eye,
  QrCode,
  ToggleLeft,
  ToggleRight,
  ExternalLink,
  Activity,
  Calendar,
  User,
  MoreHorizontal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { 
  VerificationRecord,
  VerificationStats,
  VerificationQueryParams,
  VerificationWithEmployee,
  Employee
} from '@/types/employee';
import { 
  getVerificationRecords, 
  getVerificationStats, 
  updateVerificationRecord,
  getEmployees
} from '@/services/employeeService';
import QRCodeGenerator from '@/components/verification/QRCodeGenerator';
import VerificationForm from './VerificationForm';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

const VerificationManagement: React.FC = () => {
  const { toast } = useToast();
  const [verifications, setVerifications] = useState<VerificationWithEmployee[]>([]);
  const [stats, setStats] = useState<VerificationStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVerification, setSelectedVerification] = useState<VerificationWithEmployee | null>(null);
  const [showVerificationForm, setShowVerificationForm] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0
  });

  // Fetch verification records
  const fetchVerifications = async (params: VerificationQueryParams = {}) => {
    try {
      setLoading(true);
      const response = await getVerificationRecords({
        page: pagination.page,
        limit: pagination.limit,
        ...params
      });

      if (response.success && response.data) {
        setVerifications(response.data);
        setPagination(response.pagination);
      } else {
        toast({
          title: 'Error',
          description: response.error || 'Failed to fetch verification records',
          variant: 'destructive'
        });
      }
    } catch (error) {
      console.error('Error fetching verifications:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch verification records',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch verification statistics
  const fetchStats = async () => {
    try {
      const response = await getVerificationStats();
      if (response.success && response.data) {
        setStats(response.data);
      }
    } catch (error) {
      console.error('Error fetching verification stats:', error);
    }
  };

  // Toggle verification status
  const handleToggleStatus = async (verification: VerificationWithEmployee) => {
    try {
      const response = await updateVerificationRecord(verification.id, {
        is_active: !verification.is_active
      });

      if (response.success) {
        toast({
          title: 'Success',
          description: `Verification ${verification.is_active ? 'deactivated' : 'activated'} successfully`
        });
        fetchVerifications();
        fetchStats();
      } else {
        toast({
          title: 'Error',
          description: response.error || 'Failed to update verification status',
          variant: 'destructive'
        });
      }
    } catch (error) {
      console.error('Error toggling verification status:', error);
      toast({
        title: 'Error',
        description: 'Failed to update verification status',
        variant: 'destructive'
      });
    }
  };

  // Handle verification form success
  const handleVerificationFormSuccess = () => {
    setShowVerificationForm(false);
    fetchVerifications();
    fetchStats();
  };

  // Open verification page
  const openVerificationPage = (token: string) => {
    const url = `https://quadrate.lk/verify/${token}`;
    window.open(url, '_blank');
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  useEffect(() => {
    fetchVerifications();
    fetchStats();
  }, [pagination.page]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Verification Management</h1>
          <p className="text-muted-foreground">
            Manage employee verification records and QR codes
          </p>
        </div>
        <Dialog open={showVerificationForm} onOpenChange={setShowVerificationForm}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Verification
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Create Verification Record</DialogTitle>
            </DialogHeader>
            <VerificationForm
              onSuccess={handleVerificationFormSuccess}
              onCancel={() => setShowVerificationForm(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* Statistics Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Verifications</CardTitle>
              <QrCode className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total_verifications}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Verifications</CardTitle>
              <ToggleRight className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.active_verifications}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Inactive Verifications</CardTitle>
              <ToggleLeft className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{stats.inactive_verifications}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Accesses</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total_accesses}</div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by employee name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Verification Table */}
      <Card>
        <CardHeader>
          <CardTitle>Verification Records ({pagination.total})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">
              <LoadingSpinner size="large" />
            </div>
          ) : verifications.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No verification records found
            </div>
          ) : (
            <div className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Accesses</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {verifications.map((verification) => (
                    <TableRow key={verification.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{verification.employee.full_name}</div>
                          <div className="text-sm text-muted-foreground">{verification.employee.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>{verification.employee.job_title}</TableCell>
                      <TableCell>{formatDate(verification.created_at)}</TableCell>
                      <TableCell>
                        <Badge variant={verification.is_active ? 'default' : 'secondary'}>
                          {verification.is_active ? 'Active' : 'Inactive'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <Activity className="h-4 w-4 text-muted-foreground" />
                          <span>{verification.access_count || 0}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => {
                                setSelectedVerification(verification);
                                setShowQRCode(true);
                              }}
                            >
                              <QrCode className="h-4 w-4 mr-2" />
                              View QR Code
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => openVerificationPage(verification.verification_token)}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Open Verification
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleToggleStatus(verification)}
                            >
                              {verification.is_active ? (
                                <>
                                  <ToggleLeft className="h-4 w-4 mr-2" />
                                  Deactivate
                                </>
                              ) : (
                                <>
                                  <ToggleRight className="h-4 w-4 mr-2" />
                                  Activate
                                </>
                              )}
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              {pagination.totalPages > 1 && (
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Showing {((pagination.page - 1) * pagination.limit) + 1} to {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} records
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                      disabled={pagination.page <= 1}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                      disabled={pagination.page >= pagination.totalPages}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* QR Code Dialog */}
      {selectedVerification && (
        <Dialog open={showQRCode} onOpenChange={setShowQRCode}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>QR Code - {selectedVerification.employee.full_name}</DialogTitle>
            </DialogHeader>
            <QRCodeGenerator
              verificationToken={selectedVerification.verification_token}
              employeeName={selectedVerification.employee.full_name}
              verificationUrl={`https://quadrate.lk/verify/${selectedVerification.verification_token}`}
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default VerificationManagement;
