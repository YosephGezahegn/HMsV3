import { Doctor } from "../doctor/Doctor";
import { Patient } from "../patient/Patient";

export type User = {
  createdAt: Date;
  doctor?: Doctor | null;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  password: string;
  patient?: Patient | null;
  phoneNumber: string | null;
  role?: "ADMIN" | "DOCTOR" | "NURSE" | "PATIENT" | "STAFF";
  updatedAt: Date;
};
