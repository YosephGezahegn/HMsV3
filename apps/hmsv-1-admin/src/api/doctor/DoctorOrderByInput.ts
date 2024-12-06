import { SortOrder } from "../../util/SortOrder";

export type DoctorOrderByInput = {
  departmentId?: SortOrder;
  id?: SortOrder;
  licenseNumber?: SortOrder;
  specialization?: SortOrder;
  userId?: SortOrder;
};
