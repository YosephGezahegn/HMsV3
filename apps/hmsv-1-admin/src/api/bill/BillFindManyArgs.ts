import { BillWhereInput } from "./BillWhereInput";
import { BillOrderByInput } from "./BillOrderByInput";

export type BillFindManyArgs = {
  where?: BillWhereInput;
  orderBy?: Array<BillOrderByInput>;
  skip?: number;
  take?: number;
};
