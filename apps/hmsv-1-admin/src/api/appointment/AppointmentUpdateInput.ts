import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentUpdateInput = {
  dateTime?: Date;
  doctor?: DoctorWhereUniqueInput;
  notes?: string | null;
  patient?: PatientWhereUniqueInput;
  status?: "SCHEDULED" | "CONFIRMED" | "COMPLETED" | "CANCELLED";
};
