export interface IUserPermitRequest{
    userId: number;
    beginDate: Date;
    endDate: Date;
    holidayType: string;
    description: string;

}