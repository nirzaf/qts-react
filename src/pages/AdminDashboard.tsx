/**
 * Admin Dashboard for Employee Verification System
 * Company: Quadrate Tech Solutions (https://quadrate.lk)
 */

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Shield, 
  Activity, 
  TrendingUp,
  Plus,
  Search,
  Filter,
  Download,
  Settings
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import SEO from '@/components/seo/SEO';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import EmployeeManagement from '@/components/admin/EmployeeManagement';
import VerificationManagement from '@/components/admin/VerificationManagement';
import { 
  EmployeeStats, 
  VerificationStats 
} from '@/types/employee';
import { 
  getEmployeeStats, 
  getVerificationStats 
} from '@/services/employeeService';

const AdminDashboard: React.FC = () => {
  const { toast } = useToast();
  const [employeeStats, setEmployeeStats] = useState<EmployeeStats | null>(null);
  const [verificationStats, setVerificationStats] = useState<VerificationStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Fetch dashboard statistics
  const fetchStats = async () => {
    try {
      setLoading(true);
      const [employeeResponse, verificationResponse] = await Promise.all([
        getEmployeeStats(),
        getVerificationStats()
      ]);

      if (employeeResponse.success && employeeResponse.data) {
        setEmployeeStats(employeeResponse.data);
      }

      if (verificationResponse.success && verificationResponse.data) {
        setVerificationStats(verificationResponse.data);
      }
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      toast({
        title: 'Error',
        description: 'Failed to load dashboard statistics',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  // Calculate verification success rate
  const getVerificationSuccessRate = () => {
    if (!verificationStats || verificationStats.total_accesses === 0) return 0;
    // Assuming successful verifications are those that found valid records
    return Math.round((verificationStats.active_verifications / verificationStats.total_verifications) * 100);
  };

  return (
    <>
      <SEO 
        title="Admin Dashboard - Employee Verification System | Quadrate Tech Solutions"
        description="Manage employees and verification records in the Quadrate Tech Solutions employee verification system."
        noIndex={true}
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Employee Verification System
                </h1>
                <p className="text-gray-600 mt-1">
                  Manage employee records and verification system
                </p>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
                <Button variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </div>

          {/* Dashboard Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="employees">Employees</TabsTrigger>
              <TabsTrigger value="verifications">Verifications</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {loading ? (
                <div className="flex justify-center py-12">
                  <LoadingSpinner size="large" />
                </div>
              ) : (
                <>
                  {/* Statistics Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Total Employees */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">
                          {employeeStats?.total_employees || 0}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {employeeStats?.active_employees || 0} active, {employeeStats?.former_employees || 0} former
                        </p>
                      </CardContent>
                    </Card>

                    {/* Total Verifications */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Verification Records</CardTitle>
                        <Shield className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">
                          {verificationStats?.total_verifications || 0}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {verificationStats?.active_verifications || 0} active
                        </p>
                      </CardContent>
                    </Card>

                    {/* Total Accesses */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Accesses</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">
                          {verificationStats?.total_accesses || 0}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Verification attempts
                        </p>
                      </CardContent>
                    </Card>

                    {/* Success Rate */}
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">
                          {getVerificationSuccessRate()}%
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Verification success
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Department Breakdown */}
                  {employeeStats?.departments && employeeStats.departments.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Department Breakdown</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {employeeStats.departments.map((dept) => (
                            <div key={dept.name} className="text-center p-4 bg-gray-50 rounded-lg">
                              <div className="text-2xl font-bold text-blue-600">{dept.count}</div>
                              <div className="text-sm text-gray-600">{dept.name}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Recent Activity */}
                  {verificationStats?.recent_accesses && verificationStats.recent_accesses.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Recent Verification Activity</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {verificationStats.recent_accesses.slice(0, 5).map((log) => (
                            <div key={log.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <div className={`w-2 h-2 rounded-full ${log.success ? 'bg-green-500' : 'bg-red-500'}`} />
                                <div>
                                  <p className="text-sm font-medium">
                                    {log.success ? 'Successful verification' : 'Failed verification'}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {log.ip_address} • {new Date(log.accessed_at).toLocaleString()}
                                  </p>
                                </div>
                              </div>
                              <Badge variant={log.success ? 'default' : 'destructive'}>
                                {log.success ? 'Success' : 'Failed'}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Quick Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Button 
                          className="h-20 flex-col space-y-2"
                          onClick={() => setActiveTab('employees')}
                        >
                          <Plus className="h-6 w-6" />
                          <span>Add Employee</span>
                        </Button>
                        <Button 
                          variant="outline" 
                          className="h-20 flex-col space-y-2"
                          onClick={() => setActiveTab('verifications')}
                        >
                          <Shield className="h-6 w-6" />
                          <span>Create Verification</span>
                        </Button>
                        <Button 
                          variant="outline" 
                          className="h-20 flex-col space-y-2"
                        >
                          <Download className="h-6 w-6" />
                          <span>Export Reports</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </TabsContent>

            {/* Employees Tab */}
            <TabsContent value="employees">
              <EmployeeManagement />
            </TabsContent>

            {/* Verifications Tab */}
            <TabsContent value="verifications">
              <VerificationManagement />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
