export interface IManagerSpendingResponse {
    userId:number;
    companyId: number;
    avatar: string;
    firstName: string;
    lastName: string;
    position: string;
    spendingDetails: {
        spendingDate: Date; 
        description: string;
        spendingType: string;
        spendingId:number;
    }[];
}
