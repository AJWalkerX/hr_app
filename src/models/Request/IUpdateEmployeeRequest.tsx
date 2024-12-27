export interface IUpdateEmployeeRequest {
  companyId: number;
  userId: number;
  avatar: string;
  email: string;
  userState: string;
  address: string;
  annualSalary: number;
  dateOfBirth: Date;
  dateOfEmployment: Date;
  dateOfTermination: Date;
  firstName: string;
  lastName: string;
  gender: string;
  identityNumber: string;
  socialSecurityNumber: string;
  mobileNumber: string;
  position: string;
}
