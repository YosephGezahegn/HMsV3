import { Doctor as TDoctor } from "../api/doctor/Doctor";

export const DOCTOR_TITLE_FIELD = "licenseNumber";

export const DoctorTitle = (record: TDoctor): string => {
  return record.licenseNumber?.toString() || String(record.id);
};
