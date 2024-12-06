import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  doctorId?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  patientId?: SortOrder;
  phoneNumber?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
