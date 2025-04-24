import React from 'react';
import { Form } from 'react-bootstrap';
import Text from '../../atoms/Typography/Text';

export interface FormGroupProps {
  controlId: string;
  label: string;
  children: React.ReactNode;
  required?: boolean;
  helpText?: string;
  error?: string;
  className?: string;
  variant?: 'light' | 'dark';
}

const FormGroup = ({
  controlId,
  label,
  children,
  required = false,
  helpText,
  error,
  className = '',
  variant = 'light',
}: FormGroupProps) => {
  const labelClass = variant === 'dark' ? 'form-label-light' : '';
  const formGroupClass = `mb-3 ${className}`;
  
  return (
    <Form.Group controlId={controlId} className={formGroupClass}>
      <Form.Label className={labelClass}>
        {label} {required && <span className="text-danger">*</span>}
      </Form.Label>
      
      {children}
      
      {helpText && !error && (
        <Text as="div" variant="small" color="muted" className="mt-1">
          {helpText}
        </Text>
      )}
      
      {error && (
        <Text as="div" variant="small" color="dark" className="mt-1">
          {error}
        </Text>
      )}
    </Form.Group>
  );
};

export default FormGroup;