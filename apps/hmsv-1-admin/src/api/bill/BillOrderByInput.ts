import { SortOrder } from "../../util/SortOrder";

export type BillOrderByInput = {
  amount?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isPaid?: SortOrder;
  patientId?: SortOrder;
};
