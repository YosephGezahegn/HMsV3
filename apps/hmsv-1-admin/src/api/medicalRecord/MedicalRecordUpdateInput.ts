import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type MedicalRecordUpdateInput = {
  diagnosis?: string;
  doctor?: DoctorWhereUniqueInput;
  notes?: string | null;
  patient?: PatientWhereUniqueInput;
  treatment?: string | null;
};
