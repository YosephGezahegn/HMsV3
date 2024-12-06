import { DoctorCreateNestedManyWithoutDepartmentsInput } from "./DoctorCreateNestedManyWithoutDepartmentsInput";

export type DepartmentCreateInput = {
  description?: string | null;
  doctors?: DoctorCreateNestedManyWithoutDepartmentsInput;
  name: string;
};
