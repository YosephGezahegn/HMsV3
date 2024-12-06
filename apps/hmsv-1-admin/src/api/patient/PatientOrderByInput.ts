import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  allergies?: SortOrder;
  bloodGroup?: SortOrder;
  dateOfBirth?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  userId?: SortOrder;
};
