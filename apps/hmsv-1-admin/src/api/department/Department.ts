import { Doctor } from "../doctor/Doctor";

export type Department = {
  description: string | null;
  doctors?: Array<Doctor>;
  id: string;
  name: string;
};
