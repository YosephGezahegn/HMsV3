import { Doctor } from "../doctor/Doctor";
import { Patient } from "../patient/Patient";

export type Prescription = {
  doctor?: Doctor;
  dosage: string;
  endDate: Date | null;
  frequency: string;
  id: string;
  medication: string;
  notes: string | null;
  patient?: Patient;
  startDate: Date;
};
