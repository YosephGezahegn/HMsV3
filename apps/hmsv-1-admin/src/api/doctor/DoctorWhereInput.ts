import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MedicalRecordListRelationFilter } from "../medicalRecord/MedicalRecordListRelationFilter";
import { PrescriptionListRelationFilter } from "../prescription/PrescriptionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DoctorWhereInput = {
  appointments?: AppointmentListRelationFilter;
  department?: DepartmentWhereUniqueInput;
  id?: StringFilter;
  licenseNumber?: StringFilter;
  medicalRecords?: MedicalRecordListRelationFilter;
  prescriptions?: PrescriptionListRelationFilter;
  specialization?: StringFilter;
  user?: UserWhereUniqueInput;
};
