export interface User {
  id: number;
  username: string;
  email: string;
  fullName: string;
  phoneNumber?: string;
  role: 'ADMIN' | 'STAFF' | 'USER';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Session {
  sessionId: string;
  expiresAt: string;
}

export interface LoginRequest {
  emailOrUsername: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  fullName: string;
  phoneNumber?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

export interface LoginResponse {
  user: User;
  session: Session;
  tokens?: TokenPair;
}

export interface RegisterResponse {
  user: User;
}

export interface VerifyRegistrationResponse {
  user: User;
  tokens: TokenPair;
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
  expiresIn: string;
}

export interface OTPSendResponse {
  email: string;
  expiresAt: string;
  expiresIn: string;
}

export interface SendRegistrationOTPRequest {
  email: string;
  fullName?: string;
}

export interface VerifyRegistrationOTPRequest {
  email: string;
  otpCode: string;
  username: string;
  password: string;
  fullName: string;
  phoneNumber?: string;
}

export interface PasswordResetOTPRequest {
  email: string;
}

export interface ResetPasswordWithOTPRequest {
  email: string;
  otpCode: string;
  newPassword: string;
}
