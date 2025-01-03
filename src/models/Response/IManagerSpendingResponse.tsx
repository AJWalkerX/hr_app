export interface IManagerSpendingResponse {
    companyId: number;
    avatar: string;
    firstName: string;
    lastName: string;
    position: string;
    spendingDetails: {
        spendingDate: Date; // Tarih string olarak gelecek
        description: string;
        spendingType: string;
    }[];
}
