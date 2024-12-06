import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  createdAt?: DateTimeFilter;
  doctor?: DoctorWhereUniqueInput;
  email?: StringFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  password?: StringFilter;
  patient?: PatientWhereUniqueInput;
  phoneNumber?: StringNullableFilter;
  role?: "ADMIN" | "DOCTOR" | "NURSE" | "PATIENT" | "STAFF";
  updatedAt?: DateTimeFilter;
};
