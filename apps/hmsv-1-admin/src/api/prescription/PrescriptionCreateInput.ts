import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type PrescriptionCreateInput = {
  doctor: DoctorWhereUniqueInput;
  dosage: string;
  endDate?: Date | null;
  frequency: string;
  medication: string;
  notes?: string | null;
  patient: PatientWhereUniqueInput;
  startDate: Date;
};
