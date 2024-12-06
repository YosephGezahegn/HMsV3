import { Decimal } from "decimal.js";

export type MedicationCreateInput = {
  description?: string | null;
  manufacturer?: string | null;
  name: string;
  stockQuantity: number;
  unitPrice: Decimal;
};
