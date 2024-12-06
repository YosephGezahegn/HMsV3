import { SortOrder } from "../../util/SortOrder";

export type MedicalRecordOrderByInput = {
  date?: SortOrder;
  diagnosis?: SortOrder;
  doctorId?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  patientId?: SortOrder;
  treatment?: SortOrder;
};
