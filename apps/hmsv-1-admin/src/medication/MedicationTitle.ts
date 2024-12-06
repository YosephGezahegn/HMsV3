import { Medication as TMedication } from "../api/medication/Medication";

export const MEDICATION_TITLE_FIELD = "name";

export const MedicationTitle = (record: TMedication): string => {
  return record.name?.toString() || String(record.id);
};
