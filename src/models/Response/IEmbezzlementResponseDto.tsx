

export interface IEmbezzlementResponseDto {
  embezzlementId: number,
	 companyId: number,
	 userId: number,
	 description: string,
	 embezzlementType: string,
	 embezzlementState: string,
	
  userDetails:{
     avatar: string,
    firstName: string,
     lastName: string,
  };
}
