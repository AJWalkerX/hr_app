import { DateTime } from "luxon";

export interface IShiftListResponse {
  shiftId: number;
  shiftName: string;
  beginTime: DateTime;
  endTime: DateTime;
}
