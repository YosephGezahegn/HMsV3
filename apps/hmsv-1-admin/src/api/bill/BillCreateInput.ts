import { Decimal } from "decimal.js";

export type BillCreateInput = {
  amount: Decimal;
  description: string;
  isPaid: boolean;
  patientId: string;
};
