import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { MedicalRecordListRelationFilter } from "../medicalRecord/MedicalRecordListRelationFilter";
import { PrescriptionListRelationFilter } from "../prescription/PrescriptionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PatientWhereInput = {
  allergies?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
  bloodGroup?: StringNullableFilter;
  dateOfBirth?: DateTimeFilter;
  gender?: "MALE" | "FEMALE" | "OTHER";
  id?: StringFilter;
  medicalRecords?: MedicalRecordListRelationFilter;
  prescriptions?: PrescriptionListRelationFilter;
  user?: UserWhereUniqueInput;
};
