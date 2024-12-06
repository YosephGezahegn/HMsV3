import { Decimal } from "decimal.js";

export type MedicationUpdateInput = {
  description?: string | null;
  manufacturer?: string | null;
  name?: string;
  stockQuantity?: number;
  unitPrice?: Decimal;
};
