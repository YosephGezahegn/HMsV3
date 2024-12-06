import { Decimal } from "decimal.js";

export type Medication = {
  description: string | null;
  id: string;
  manufacturer: string | null;
  name: string;
  stockQuantity: number;
  unitPrice: Decimal;
};
