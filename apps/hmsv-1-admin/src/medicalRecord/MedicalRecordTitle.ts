import { MedicalRecord as TMedicalRecord } from "../api/medicalRecord/MedicalRecord";

export const MEDICALRECORD_TITLE_FIELD = "diagnosis";

export const MedicalRecordTitle = (record: TMedicalRecord): string => {
  return record.diagnosis?.toString() || String(record.id);
};
