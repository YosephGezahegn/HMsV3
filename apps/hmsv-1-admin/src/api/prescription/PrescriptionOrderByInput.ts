import { SortOrder } from "../../util/SortOrder";

export type PrescriptionOrderByInput = {
  doctorId?: SortOrder;
  dosage?: SortOrder;
  endDate?: SortOrder;
  frequency?: SortOrder;
  id?: SortOrder;
  medication?: SortOrder;
  notes?: SortOrder;
  patientId?: SortOrder;
  startDate?: SortOrder;
};
