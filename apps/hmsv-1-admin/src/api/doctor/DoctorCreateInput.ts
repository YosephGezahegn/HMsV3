import { AppointmentCreateNestedManyWithoutDoctorsInput } from "./AppointmentCreateNestedManyWithoutDoctorsInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { MedicalRecordCreateNestedManyWithoutDoctorsInput } from "./MedicalRecordCreateNestedManyWithoutDoctorsInput";
import { PrescriptionCreateNestedManyWithoutDoctorsInput } from "./PrescriptionCreateNestedManyWithoutDoctorsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DoctorCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutDoctorsInput;
  department: DepartmentWhereUniqueInput;
  licenseNumber: string;
  medicalRecords?: MedicalRecordCreateNestedManyWithoutDoctorsInput;
  prescriptions?: PrescriptionCreateNestedManyWithoutDoctorsInput;
  specialization: string;
  user: UserWhereUniqueInput;
};
