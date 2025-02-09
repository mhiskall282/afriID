export interface User {
  id: string;
  name: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  status: 'pending' | 'verified' | 'rejected';
  biometricVerified: boolean;
  documentVerified: boolean;
  qrCode: string;
}

export interface VerificationLog {
  id: string;
  userId: string;
  timestamp: string;
  organization: string;
  action: 'verify' | 'update' | 'create';
  status: 'success' | 'failed';
}