import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DoctorListRelationFilter } from "../doctor/DoctorListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type DepartmentWhereInput = {
  description?: StringNullableFilter;
  doctors?: DoctorListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
};
