import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "notes";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.notes?.toString() || String(record.id);
};
