export interface INewEmployeeRequest {
  email: string;
  password: string;
  rePassword: string;
  firstName: string;
  lastName: string;
  identityNumber: string;
  dateOfBirth: Date;
  mobileNumber: string;
  address: string;
  gender: string;
  position: string;
  dateOfEmployment: Date;
  annualSalary: number;
  socialSecurityNumber: string;
}
