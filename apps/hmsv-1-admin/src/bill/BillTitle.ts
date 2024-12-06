import { Bill as TBill } from "../api/bill/Bill";

export const BILL_TITLE_FIELD = "description";

export const BillTitle = (record: TBill): string => {
  return record.description?.toString() || String(record.id);
};
