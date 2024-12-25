export interface IUserPermitRequest{
    userId: number;
    beginDate: Date;
    endDate: Date;
    holidayState: string;
    holidayType: string;

}