import { MedicalRecordWhereInput } from "./MedicalRecordWhereInput";
import { MedicalRecordOrderByInput } from "./MedicalRecordOrderByInput";

export type MedicalRecordFindManyArgs = {
  where?: MedicalRecordWhereInput;
  orderBy?: Array<MedicalRecordOrderByInput>;
  skip?: number;
  take?: number;
};
