/**
 * Verification Form Component
 * Form for creating verification records
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
  CreateVerificationRequest
} from '@/types/employee';
import { 
  getEmployees,
  createVerificationRecord
} from '@/services/employeeService';

interface VerificationFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

const VerificationForm: React.FC<VerificationFormProps> = ({
  onSuccess,
  onCancel
}) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loadingEmployees, setLoadingEmployees] = useState(true);
  const [formData, setFormData] = useState({
    employee_id: '',
    expires_at: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Fetch employees
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoadingEmployees(true);
        const response = await getEmployees({ limit: 100 }); // Get first 100 employees
        if (response.success && response.data) {
          setEmployees(response.data);
        }
      } catch (error) {
        console.error('Error fetching employees:', error);
        toast({
          title: 'Error',
          description: 'Failed to load employees',
          variant: 'destructive'
        });
      } finally {
        setLoadingEmployees(false);
      }
    };

    fetchEmployees();
  }, []);

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

    if (!formData.employee_id) {
      newErrors.employee_id = 'Please select an employee';
    }

    // If expiration date is provided, it should be in the future
    if (formData.expires_at) {
      const expirationDate = new Date(formData.expires_at);
      const now = new Date();
      if (expirationDate <= now) {
        newErrors.expires_at = 'Expiration date must be in the future';
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
      const verificationData: CreateVerificationRequest = {
        employee_id: formData.employee_id,
        expires_at: formData.expires_at || undefined
      };

      const response = await createVerificationRecord(verificationData);

      if (response.success) {
        toast({
          title: 'Success',
          description: 'Verification record created successfully'
        });
        onSuccess();
      } else {
        toast({
          title: 'Error',
          description: response.error || 'Failed to create verification record',
          variant: 'destructive'
        });
      }
    } catch (error) {
      console.error('Error creating verification:', error);
      toast({
        title: 'Error',
        description: 'Failed to create verification record',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  // Get minimum date for expiration (tomorrow)
  const getMinExpirationDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Employee Selection */}
      <div className="space-y-2">
        <Label htmlFor="employee_id">Employee *</Label>
        {loadingEmployees ? (
          <div className="text-sm text-muted-foreground">Loading employees...</div>
        ) : (
          <Select
            value={formData.employee_id}
            onValueChange={(value) => handleInputChange('employee_id', value)}
          >
            <SelectTrigger className={errors.employee_id ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select an employee" />
            </SelectTrigger>
            <SelectContent>
              {employees.map((employee) => (
                <SelectItem key={employee.id} value={employee.id}>
                  <div className="flex flex-col">
                    <span className="font-medium">{employee.full_name}</span>
                    <span className="text-sm text-muted-foreground">
                      {employee.job_title} • {employee.email}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        {errors.employee_id && (
          <p className="text-sm text-red-500">{errors.employee_id}</p>
        )}
      </div>

      {/* Expiration Date (Optional) */}
      <div className="space-y-2">
        <Label htmlFor="expires_at">Expiration Date (Optional)</Label>
        <Input
          id="expires_at"
          type="date"
          value={formData.expires_at}
          onChange={(e) => handleInputChange('expires_at', e.target.value)}
          min={getMinExpirationDate()}
          className={errors.expires_at ? 'border-red-500' : ''}
        />
        <p className="text-xs text-muted-foreground">
          Leave empty for permanent verification link
        </p>
        {errors.expires_at && (
          <p className="text-sm text-red-500">{errors.expires_at}</p>
        )}
      </div>

      {/* Information */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-medium text-blue-900 mb-2">What happens next?</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• A unique verification token will be generated</li>
          <li>• You'll get a QR code and verification URL</li>
          <li>• The verification page will show employee details</li>
          <li>• All access attempts will be logged for security</li>
        </ul>
      </div>

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
          disabled={loading || loadingEmployees}
        >
          {loading ? 'Creating...' : 'Create Verification'}
        </Button>
      </div>
    </form>
  );
};

export default VerificationForm;
