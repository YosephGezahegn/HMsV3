import { DoctorUpdateManyWithoutDepartmentsInput } from "./DoctorUpdateManyWithoutDepartmentsInput";

export type DepartmentUpdateInput = {
  description?: string | null;
  doctors?: DoctorUpdateManyWithoutDepartmentsInput;
  name?: string;
};
