import { MedicationWhereInput } from "./MedicationWhereInput";
import { MedicationOrderByInput } from "./MedicationOrderByInput";

export type MedicationFindManyArgs = {
  where?: MedicationWhereInput;
  orderBy?: Array<MedicationOrderByInput>;
  skip?: number;
  take?: number;
};
