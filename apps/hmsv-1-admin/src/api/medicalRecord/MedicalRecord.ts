import { Doctor } from "../doctor/Doctor";
import { Patient } from "../patient/Patient";

export type MedicalRecord = {
  date: Date;
  diagnosis: string;
  doctor?: Doctor;
  id: string;
  notes: string | null;
  patient?: Patient;
  treatment: string | null;
};
