import { DateTime } from "luxon";

export interface ICreateShiftRequest {
  shiftName: string;
  shiftStart: DateTime;
  shiftEnd: DateTime;
}
