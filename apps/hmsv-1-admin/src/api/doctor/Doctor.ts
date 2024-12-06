import { Appointment } from "../appointment/Appointment";
import { Department } from "../department/Department";
import { MedicalRecord } from "../medicalRecord/MedicalRecord";
import { Prescription } from "../prescription/Prescription";
import { User } from "../user/User";

export type Doctor = {
  appointments?: Array<Appointment>;
  department?: Department;
  id: string;
  licenseNumber: string;
  medicalRecords?: Array<MedicalRecord>;
  prescriptions?: Array<Prescription>;
  specialization: string;
  user?: User;
};
