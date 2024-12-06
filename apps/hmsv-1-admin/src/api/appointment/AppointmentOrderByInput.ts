import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  dateTime?: SortOrder;
  doctorId?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  patientId?: SortOrder;
  status?: SortOrder;
};
