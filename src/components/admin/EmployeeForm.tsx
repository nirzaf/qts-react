/**
 * Employee Form Component
 * Form for creating and editing employees
 * Company: Quadrate Tech Solutions (https://quadrate.lk)
 */

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { 
  Employee, 
  CreateEmployeeRequest, 
  UpdateEmployeeRequest,
  EmploymentStatus,
  EMPLOYMENT_STATUSES 
} from '@/types/employee';
import { 
  createEmployee, 
  updateEmployee 
} from '@/services/employeeService';

interface EmployeeFormProps {
  employee?: Employee | null;
  onSuccess: () => void;
  onCancel: () => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({
  employee,
  onSuccess,
  onCancel
}) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    job_title: '',
    department: '',
    employment_start_date: '',
    employment_end_date: '',
    employment_status: 'active' as EmploymentStatus
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Initialize form data
  useEffect(() => {
    if (employee) {
      setFormData({
        full_name: employee.full_name,
        email: employee.email,
        job_title: employee.job_title,
        department: employee.department || '',
        employment_start_date: employee.employment_start_date,
        employment_end_date: employee.employment_end_date || '',
        employment_status: employee.employment_status
      });
    }
  }, [employee]);

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.full_name.trim()) {
      newErrors.full_name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.job_title.trim()) {
      newErrors.job_title = 'Job title is required';
    }

    if (!formData.employment_start_date) {
      newErrors.employment_start_date = 'Employment start date is required';
    }

    // If employment status is not active, end date should be provided
    if (formData.employment_status !== 'active' && !formData.employment_end_date) {
      newErrors.employment_end_date = 'End date is required for non-active employees';
    }

    // End date should be after start date
    if (formData.employment_start_date && formData.employment_end_date) {
      const startDate = new Date(formData.employment_start_date);
      const endDate = new Date(formData.employment_end_date);
      if (endDate <= startDate) {
        newErrors.employment_end_date = 'End date must be after start date';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const employeeData = {
        ...formData,
        department: formData.department || undefined,
        employment_end_date: formData.employment_end_date || undefined
      };

      let response;
      if (employee) {
        // Update existing employee
        response = await updateEmployee(employee.id, employeeData as UpdateEmployeeRequest);
      } else {
        // Create new employee
        response = await createEmployee(employeeData as CreateEmployeeRequest);
      }

      if (response.success) {
        toast({
          title: 'Success',
          description: `Employee ${employee ? 'updated' : 'created'} successfully`
        });
        onSuccess();
      } else {
        toast({
          title: 'Error',
          description: response.error || `Failed to ${employee ? 'update' : 'create'} employee`,
          variant: 'destructive'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error',
        description: `Failed to ${employee ? 'update' : 'create'} employee`,
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Full Name */}
      <div className="space-y-2">
        <Label htmlFor="full_name">Full Name *</Label>
        <Input
          id="full_name"
          value={formData.full_name}
          onChange={(e) => handleInputChange('full_name', e.target.value)}
          placeholder="Enter full name"
          className={errors.full_name ? 'border-red-500' : ''}
        />
        {errors.full_name && (
          <p className="text-sm text-red-500">{errors.full_name}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          placeholder="Enter email address"
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Job Title */}
      <div className="space-y-2">
        <Label htmlFor="job_title">Job Title *</Label>
        <Input
          id="job_title"
          value={formData.job_title}
          onChange={(e) => handleInputChange('job_title', e.target.value)}
          placeholder="Enter job title"
          className={errors.job_title ? 'border-red-500' : ''}
        />
        {errors.job_title && (
          <p className="text-sm text-red-500">{errors.job_title}</p>
        )}
      </div>

      {/* Department */}
      <div className="space-y-2">
        <Label htmlFor="department">Department</Label>
        <Input
          id="department"
          value={formData.department}
          onChange={(e) => handleInputChange('department', e.target.value)}
          placeholder="Enter department (optional)"
        />
      </div>

      {/* Employment Start Date */}
      <div className="space-y-2">
        <Label htmlFor="employment_start_date">Employment Start Date *</Label>
        <Input
          id="employment_start_date"
          type="date"
          value={formData.employment_start_date}
          onChange={(e) => handleInputChange('employment_start_date', e.target.value)}
          className={errors.employment_start_date ? 'border-red-500' : ''}
        />
        {errors.employment_start_date && (
          <p className="text-sm text-red-500">{errors.employment_start_date}</p>
        )}
      </div>

      {/* Employment Status */}
      <div className="space-y-2">
        <Label htmlFor="employment_status">Employment Status *</Label>
        <Select
          value={formData.employment_status}
          onValueChange={(value: EmploymentStatus) => handleInputChange('employment_status', value)}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {EMPLOYMENT_STATUSES.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Employment End Date (conditional) */}
      {formData.employment_status !== 'active' && (
        <div className="space-y-2">
          <Label htmlFor="employment_end_date">Employment End Date *</Label>
          <Input
            id="employment_end_date"
            type="date"
            value={formData.employment_end_date}
            onChange={(e) => handleInputChange('employment_end_date', e.target.value)}
            className={errors.employment_end_date ? 'border-red-500' : ''}
          />
          {errors.employment_end_date && (
            <p className="text-sm text-red-500">{errors.employment_end_date}</p>
          )}
        </div>
      )}

      {/* Form Actions */}
      <div className="flex justify-end space-x-2 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={loading}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={loading}
        >
          {loading ? 'Saving...' : (employee ? 'Update Employee' : 'Create Employee')}
        </Button>
      </div>
    </form>
  );
};

export default EmployeeForm;
