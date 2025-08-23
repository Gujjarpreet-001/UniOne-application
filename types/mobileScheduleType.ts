export interface MobileClassData {
  subject: string;
  startTime: string;
  endTime: string;
  location: string;
  teacherName: string;
  teacherAvatar: string;
}

export interface MobileDaySchedule {
  dayShort: string;
  date: string;
  classes: MobileClassData[];
}