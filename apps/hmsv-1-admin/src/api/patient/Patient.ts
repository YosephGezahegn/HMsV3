import { Appointment } from "../appointment/Appointment";
import { MedicalRecord } from "../medicalRecord/MedicalRecord";
import { Prescription } from "../prescription/Prescription";
import { User } from "../user/User";

export type Patient = {
  allergies: string | null;
  appointments?: Array<Appointment>;
  bloodGroup: string | null;
  dateOfBirth: Date;
  gender?: "MALE" | "FEMALE" | "OTHER";
  id: string;
  medicalRecords?: Array<MedicalRecord>;
  prescriptions?: Array<Prescription>;
  user?: User;
};
