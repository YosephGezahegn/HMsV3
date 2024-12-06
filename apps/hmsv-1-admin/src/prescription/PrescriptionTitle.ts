import { Prescription as TPrescription } from "../api/prescription/Prescription";

export const PRESCRIPTION_TITLE_FIELD = "dosage";

export const PrescriptionTitle = (record: TPrescription): string => {
  return record.dosage?.toString() || String(record.id);
};
