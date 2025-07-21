/**
 * Admin Verification Management Page
 * Allows administrators to manage employees, service letters, and view verification statistics
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  FileText,
  BarChart3,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  QrCode,
  Shield,
  CheckCircle,
  TrendingUp
} from 'lucide-react';
import {
  getAllEmployees,
  getAllServiceLetters,
  getAdminStats,
  createServiceLetter,
  getVerificationRecords
} from '@/services/verificationService';
import ServiceLetterPreview from '@/components/verification/ServiceLetterPreview';
import type {
  Employee,
  ServiceLetter,
  AdminStats,
  VerificationRecord,
  CreateServiceLetterRequest
} from '@/types/verification';

type TabType = 'dashboard' | 'employees' | 'letters' | 'verifications';

const AdminVerificationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [serviceLetters, setServiceLetters] = useState<ServiceLetter[]>([]);
  const [verificationRecords, setVerificationRecords] = useState<VerificationRecord[]>([]);
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [showLetterPreview, setShowLetterPreview] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState<ServiceLetter | null>(null);

  // Load data
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [employeesData, lettersData, statsData, recordsData] = await Promise.all([
          getAllEmployees(),
          getAllServiceLetters(),
          getAdminStats(),
          getVerificationRecords()
        ]);
        setEmployees(employeesData);
        setServiceLetters(lettersData);
        setStats(statsData);
        setVerificationRecords(recordsData);
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Filter data based on search term
  const filteredEmployees = employees.filter(emp =>
    `${emp.firstName} ${emp.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredServiceLetters = serviceLetters.filter(letter =>
    letter.letterNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    letter.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Create new service letter
  const handleCreateServiceLetter = async (data: CreateServiceLetterRequest) => {
    try {
      const newLetter = await createServiceLetter(data);
      setServiceLetters(prev => [newLetter, ...prev]);
      setShowCreateModal(false);
      // Refresh stats
      const updatedStats = await getAdminStats();
      setStats(updatedStats);
    } catch (error) {
      console.error('Failed to create service letter:', error);
    }
  };

  // Show letter preview
  const handleShowLetterPreview = (letter: ServiceLetter) => {
    setSelectedLetter(letter);
    setShowLetterPreview(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Verification Portal</h1>
                <p className="text-gray-600">Manage employee verification system</p>
              </div>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>New Service Letter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'employees', label: 'Employees', icon: Users },
              { id: 'letters', label: 'Service Letters', icon: FileText },
              { id: 'verifications', label: 'Verifications', icon: CheckCircle }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Stats Cards */}
              {stats && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Employees</p>
                        <p className="text-3xl font-bold text-gray-900">{stats.totalEmployees}</p>
                      </div>
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Active Service Letters</p>
                        <p className="text-3xl font-bold text-gray-900">{stats.activeServiceLetters}</p>
                      </div>
                      <FileText className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Verifications</p>
                        <p className="text-3xl font-bold text-gray-900">{stats.totalVerifications}</p>
                      </div>
                      <CheckCircle className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Recent Verifications</p>
                        <p className="text-3xl font-bold text-gray-900">{stats.recentVerifications}</p>
                        <p className="text-xs text-gray-500">Last 7 days</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-orange-600" />
                    </div>
                  </div>
                </div>
              )}

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Verifications</h3>
                </div>
                <div className="p-6">
                  {verificationRecords.length > 0 ? (
                    <div className="space-y-4">
                      {verificationRecords.slice(0, 5).map(record => (
                        <div key={record.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{record.employee.firstName} {record.employee.lastName}</p>
                              <p className="text-sm text-gray-600">{record.serviceLetterNumber}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">{record.verificationCount} verifications</p>
                            <p className="text-xs text-gray-500">
                              {record.lastVerifiedAt && new Date(record.lastVerifiedAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">No verification records found</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'employees' && (
            <motion.div
              key="employees"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Search and Filter */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search employees..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                    <span>Filter</span>
                  </button>
                </div>
              </div>

              {/* Employees Table */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredEmployees.map(employee => (
                        <tr key={employee.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 font-semibold">
                                  {employee.firstName[0]}{employee.lastName[0]}
                                </span>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {employee.firstName} {employee.lastName}
                                </div>
                                <div className="text-sm text-gray-500">{employee.employeeId}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.department}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.position}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              employee.status === 'active'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {employee.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {new Date(employee.joinDate).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => {
                                setSelectedEmployee(employee);
                                setShowCreateModal(true);
                              }}
                              className="text-blue-600 hover:text-blue-900 mr-3"
                            >
                              Create Letter
                            </button>
                            <button className="text-gray-600 hover:text-gray-900">
                              <Eye className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'letters' && (
            <motion.div
              key="letters"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Search */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search service letters..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Service Letters Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredServiceLetters.map(letter => {
                  const employee = employees.find(emp => emp.id === letter.employeeId);
                  return (
                    <div key={letter.id} className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{letter.letterNumber}</h3>
                          <p className="text-sm text-gray-600">{letter.purpose}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          letter.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {letter.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                      
                      {employee && (
                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-900">
                            {employee.firstName} {employee.lastName}
                          </p>
                          <p className="text-sm text-gray-600">{employee.employeeId} • {employee.department}</p>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <span>Issued: {new Date(letter.issueDate).toLocaleDateString()}</span>
                        <span>By: {letter.issuedBy}</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <button 
                          onClick={() => handleShowLetterPreview(letter)}
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
                        >
                          <Eye className="w-4 h-4" />
                          <span>Preview</span>
                        </button>
                        <button className="flex items-center space-x-1 text-green-600 hover:text-green-800">
                          <QrCode className="w-4 h-4" />
                          <span>QR Code</span>
                        </button>
                        <button className="flex items-center space-x-1 text-purple-600 hover:text-purple-800">
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
                          <Edit className="w-4 h-4" />
                          <span>Edit</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'verifications' && (
            <motion.div
              key="verifications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Verification History</h3>
                </div>
                <div className="p-6">
                  {verificationRecords.length > 0 ? (
                    <div className="space-y-4">
                      {verificationRecords.map(record => (
                        <div key={record.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">
                                  {record.employee.firstName} {record.employee.lastName}
                                </p>
                                <p className="text-sm text-gray-600">{record.serviceLetterNumber}</p>
                                <p className="text-xs text-gray-500">
                                  Verification Code: {record.verificationCode}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-semibold text-gray-900">{record.verificationCount}</p>
                              <p className="text-sm text-gray-600">verifications</p>
                              {record.lastVerifiedAt && (
                                <p className="text-xs text-gray-500">
                                  Last: {new Date(record.lastVerifiedAt).toLocaleString()}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">No verification records found</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Create Service Letter Modal */}
      <CreateServiceLetterModal
        isOpen={showCreateModal}
        onClose={() => {
          setShowCreateModal(false);
          setSelectedEmployee(null);
        }}
        employees={employees}
        selectedEmployee={selectedEmployee}
        onSubmit={handleCreateServiceLetter}
      />

      {/* Service Letter Preview Modal */}
      {selectedLetter && (
        <ServiceLetterPreview
          employee={employees.find(emp => emp.id === selectedLetter.employeeId)!}
          serviceLetter={selectedLetter}
          isOpen={showLetterPreview}
          onClose={() => {
            setShowLetterPreview(false);
            setSelectedLetter(null);
          }}
        />
      )}
    </div>
  );
};

// Create Service Letter Modal Component
interface CreateServiceLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
  employees: Employee[];
  selectedEmployee: Employee | null;
  onSubmit: (data: CreateServiceLetterRequest) => void;
}

const CreateServiceLetterModal: React.FC<CreateServiceLetterModalProps> = ({
  isOpen,
  onClose,
  employees,
  selectedEmployee,
  onSubmit
}) => {
  const [formData, setFormData] = useState({
    employeeId: selectedEmployee?.id || '',
    purpose: '',
    content: '',
    issuedBy: 'HR Department'
  });

  useEffect(() => {
    if (selectedEmployee) {
      setFormData(prev => ({ ...prev, employeeId: selectedEmployee.id }));
    }
  }, [selectedEmployee]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ employeeId: '', purpose: '', content: '', issuedBy: 'HR Department' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Create Service Letter</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Employee</label>
            <select
              value={formData.employeeId}
              onChange={(e) => setFormData(prev => ({ ...prev, employeeId: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select an employee</option>
              {employees.map(employee => (
                <option key={employee.id} value={employee.id}>
                  {employee.firstName} {employee.lastName} ({employee.employeeId})
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
            <input
              type="text"
              value={formData.purpose}
              onChange={(e) => setFormData(prev => ({ ...prev, purpose: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Employment Verification for Visa Application"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter the service letter content..."
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Issued By</label>
            <input
              type="text"
              value={formData.issuedBy}
              onChange={(e) => setFormData(prev => ({ ...prev, issuedBy: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <div className="flex items-center justify-end space-x-3 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Create Service Letter
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminVerificationPage;