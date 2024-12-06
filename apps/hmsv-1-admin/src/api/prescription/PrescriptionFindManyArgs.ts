import { PrescriptionWhereInput } from "./PrescriptionWhereInput";
import { PrescriptionOrderByInput } from "./PrescriptionOrderByInput";

export type PrescriptionFindManyArgs = {
  where?: PrescriptionWhereInput;
  orderBy?: Array<PrescriptionOrderByInput>;
  skip?: number;
  take?: number;
};
