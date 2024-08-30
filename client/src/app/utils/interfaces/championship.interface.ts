import {Track} from "./track.interface";

export interface Championship {
  id?: number,
  name: string,
  description?: string
  categoryId?: number
  scoreSystemId?: number,
  calendarIds?: number[]
}
