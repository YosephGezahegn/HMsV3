import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type MedicalRecordWhereInput = {
  date?: DateTimeFilter;
  diagnosis?: StringFilter;
  doctor?: DoctorWhereUniqueInput;
  id?: StringFilter;
  notes?: StringNullableFilter;
  patient?: PatientWhereUniqueInput;
  treatment?: StringNullableFilter;
};
