import { Decimal } from "decimal.js";

export type Bill = {
  amount: Decimal;
  date: Date;
  description: string;
  id: string;
  isPaid: boolean;
  patientId: string;
};
