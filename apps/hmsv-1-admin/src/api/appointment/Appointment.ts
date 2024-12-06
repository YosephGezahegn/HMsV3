import { Doctor } from "../doctor/Doctor";
import { Patient } from "../patient/Patient";

export type Appointment = {
  dateTime: Date;
  doctor?: Doctor;
  id: string;
  notes: string | null;
  patient?: Patient;
  status?: "SCHEDULED" | "CONFIRMED" | "COMPLETED" | "CANCELLED";
};
