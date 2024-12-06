import { AppointmentUpdateManyWithoutDoctorsInput } from "./AppointmentUpdateManyWithoutDoctorsInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { MedicalRecordUpdateManyWithoutDoctorsInput } from "./MedicalRecordUpdateManyWithoutDoctorsInput";
import { PrescriptionUpdateManyWithoutDoctorsInput } from "./PrescriptionUpdateManyWithoutDoctorsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DoctorUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutDoctorsInput;
  department?: DepartmentWhereUniqueInput;
  licenseNumber?: string;
  medicalRecords?: MedicalRecordUpdateManyWithoutDoctorsInput;
  prescriptions?: PrescriptionUpdateManyWithoutDoctorsInput;
  specialization?: string;
  user?: UserWhereUniqueInput;
};
