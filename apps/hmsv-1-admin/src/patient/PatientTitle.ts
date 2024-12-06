import { Patient as TPatient } from "../api/patient/Patient";

export const PATIENT_TITLE_FIELD = "allergies";

export const PatientTitle = (record: TPatient): string => {
  return record.allergies?.toString() || String(record.id);
};
