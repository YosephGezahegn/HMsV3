import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentWhereInput = {
  dateTime?: DateTimeFilter;
  doctor?: DoctorWhereUniqueInput;
  id?: StringFilter;
  notes?: StringNullableFilter;
  patient?: PatientWhereUniqueInput;
  status?: "SCHEDULED" | "CONFIRMED" | "COMPLETED" | "CANCELLED";
};
