export interface IEmployee {
	avatar: string;
	firstName: string;
	lastName: string;
  }
  
  export interface IEmbezzlementResponseDto {
	userId: number;
	companyId: number;
	description: string;
	embezzlementType: string;
	embezzlementState: string;
	employee?: IEmployee;  
  }