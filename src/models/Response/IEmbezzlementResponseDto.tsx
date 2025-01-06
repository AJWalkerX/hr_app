export interface IEmployee {
  avatar: string;
  firstName: string;
  lastName: string;
  userId: number;
}

export interface IEmbezzlementResponseDto {
  companyId: number;
  description: string;
  embezzlementType: string;
  embezzlementState: string;
  employee?: IEmployee;
}
