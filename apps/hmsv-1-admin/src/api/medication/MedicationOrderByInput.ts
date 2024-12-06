import { SortOrder } from "../../util/SortOrder";

export type MedicationOrderByInput = {
  description?: SortOrder;
  id?: SortOrder;
  manufacturer?: SortOrder;
  name?: SortOrder;
  stockQuantity?: SortOrder;
  unitPrice?: SortOrder;
};
