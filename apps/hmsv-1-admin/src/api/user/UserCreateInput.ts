import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type UserCreateInput = {
  doctor?: DoctorWhereUniqueInput | null;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  patient?: PatientWhereUniqueInput | null;
  phoneNumber?: string | null;
  role: "ADMIN" | "DOCTOR" | "NURSE" | "PATIENT" | "STAFF";
};
