import { Decimal } from "decimal.js";

export type BillUpdateInput = {
  amount?: Decimal;
  description?: string;
  isPaid?: boolean;
  patientId?: string;
};
