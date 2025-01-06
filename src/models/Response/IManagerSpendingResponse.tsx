export interface IManagerSpendingResponse {
    userId:number;
    companyId: number;
    avatar: string;
    firstName: string;
    lastName: string;
    spendingDetails: {
        spendingDate: Date; 
        description: string;
        spendingType: string;
        spendingId:number;
        billAmount: number;
    }[];
}
