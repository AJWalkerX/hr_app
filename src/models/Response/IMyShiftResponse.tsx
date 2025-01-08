import { DateTime } from "luxon";

export interface IMyShiftResponse{
    shiftName: string,
    startTime: string,
    endTime: string,
    StartDate : Date,
    endDate: Date
}