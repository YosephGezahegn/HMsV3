import { AppointmentCreateNestedManyWithoutPatientsInput } from "./AppointmentCreateNestedManyWithoutPatientsInput";
import { MedicalRecordCreateNestedManyWithoutPatientsInput } from "./MedicalRecordCreateNestedManyWithoutPatientsInput";
import { PrescriptionCreateNestedManyWithoutPatientsInput } from "./PrescriptionCreateNestedManyWithoutPatientsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PatientCreateInput = {
  allergies?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPatientsInput;
  bloodGroup?: string | null;
  dateOfBirth: Date;
  gender: "MALE" | "FEMALE" | "OTHER";
  medicalRecords?: MedicalRecordCreateNestedManyWithoutPatientsInput;
  prescriptions?: PrescriptionCreateNestedManyWithoutPatientsInput;
  user: UserWhereUniqueInput;
};
