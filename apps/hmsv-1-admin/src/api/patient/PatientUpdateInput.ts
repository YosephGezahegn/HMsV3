import { AppointmentUpdateManyWithoutPatientsInput } from "./AppointmentUpdateManyWithoutPatientsInput";
import { MedicalRecordUpdateManyWithoutPatientsInput } from "./MedicalRecordUpdateManyWithoutPatientsInput";
import { PrescriptionUpdateManyWithoutPatientsInput } from "./PrescriptionUpdateManyWithoutPatientsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PatientUpdateInput = {
  allergies?: string | null;
  appointments?: AppointmentUpdateManyWithoutPatientsInput;
  bloodGroup?: string | null;
  dateOfBirth?: Date;
  gender?: "MALE" | "FEMALE" | "OTHER";
  medicalRecords?: MedicalRecordUpdateManyWithoutPatientsInput;
  prescriptions?: PrescriptionUpdateManyWithoutPatientsInput;
  user?: UserWhereUniqueInput;
};
