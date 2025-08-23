export interface ClassData {
  subject: string;
  time: string;
  location: string;
  scheduleType: string;
  description: string;
}

export interface DaySchedule {
  day: string;
  classes: ClassData[];
}