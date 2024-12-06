import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type PrescriptionWhereInput = {
  doctor?: DoctorWhereUniqueInput;
  dosage?: StringFilter;
  endDate?: DateTimeNullableFilter;
  frequency?: StringFilter;
  id?: StringFilter;
  medication?: StringFilter;
  notes?: StringNullableFilter;
  patient?: PatientWhereUniqueInput;
  startDate?: DateTimeFilter;
};
